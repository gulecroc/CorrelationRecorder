package com.blazemeter.jmeter.correlation.core.suggestions.method;

import com.blazemeter.jmeter.correlation.core.CorrelationEngine;
import com.blazemeter.jmeter.correlation.core.CorrelationRule;
import com.blazemeter.jmeter.correlation.core.RulesGroup;
import com.blazemeter.jmeter.correlation.core.analysis.AnalysisReporter;
import com.blazemeter.jmeter.correlation.core.automatic.CorrelationSuggestion;
import com.blazemeter.jmeter.correlation.core.automatic.JMeterElementUtils;
import com.blazemeter.jmeter.correlation.core.suggestions.SuggestionsUtils;
import com.blazemeter.jmeter.correlation.core.suggestions.context.AnalysisContext;
import com.blazemeter.jmeter.correlation.core.suggestions.context.CorrelationContext;
import com.blazemeter.jmeter.correlation.core.templates.Template;
import java.util.ArrayList;
import java.util.List;
import org.apache.jmeter.exceptions.IllegalUserActionException;
import org.apache.jmeter.gui.GuiPackage;
import org.apache.jmeter.gui.tree.JMeterTreeModel;
import org.apache.jmeter.gui.tree.JMeterTreeNode;
import org.apache.jmeter.protocol.http.sampler.HTTPSamplerProxy;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jmeter.testelement.TestElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The AnalysisMethod class implements the CorrelationMethod interface and provides
 * methods for generating correlation suggestions by analyzing the recording and replay traces
 * using the Correlation Rules in the Correlation Templates.
 */
public class AnalysisMethod implements CorrelationMethod {
  private static final Logger LOG = LoggerFactory.getLogger(AnalysisMethod.class);
  private AnalysisContext context;

  public AnalysisMethod() {
  }

  public AnalysisMethod(AnalysisContext context) {
    this.context = context;
  }

  @Override
  public List<CorrelationSuggestion> generateSuggestions(CorrelationContext context) {
    this.context = (AnalysisContext) context;

    Template template = this.context.getTemplate();
    if (template == null) {
      LOG.error("No template found. Skipping analysis.");
      return new ArrayList<>();
    }

    List<RulesGroup> templateRulesGroups = template.getGroups();
    if (isNullOrEmpty(templateRulesGroups)) {
      LOG.error("No rule groups found in the template '{}'. Skipping analysis.", template.getId());
      return new ArrayList<>();
    }

    boolean hasAnyRules = false;
    for (RulesGroup rulesGroup : templateRulesGroups) {
      if (!isNullOrEmpty(rulesGroup.getRules())) {
        hasAnyRules = true;
        break;
      } else {
        LOG.error("No rules found in the group '{}'.", rulesGroup.getId());
      }
    }

    if (!hasAnyRules) {
      LOG.error("No rules found in the groups for template '{}'. Skipping analysis.",
          template.getId());
      return new ArrayList<>();
    }

    runAnalysis(templateRulesGroups, false);
    return generateSuggestions();
  }

  private static List<CorrelationSuggestion> generateSuggestions() {
    List<CorrelationSuggestion> correlationSuggestions =
        AnalysisReporter.generateCorrelationSuggestions();
    LOG.info("Correlation suggestions generated: {}", correlationSuggestions.size());
    return correlationSuggestions;
  }

  private static void run(List<SampleResult> sampleResults,
                          List<JMeterTreeNode> samplerNodes,
                          CorrelationEngine engine,
                          List<HTTPSamplerProxy> samplers) {
    for (int i = 0; i < sampleResults.size(); i++) {
      List<TestElement> children = new ArrayList<>();
      JMeterTreeNode node = samplerNodes.get(i);
      int initialChildCount = node.getChildCount();
      for (int j = 0; j < initialChildCount; j++) {
        children.add((TestElement) ((JMeterTreeNode) node.getChildAt(j)).getUserObject());
      }
      engine.process(samplers.get(i), children, sampleResults.get(i), "");
      if (initialChildCount == children.size()) {
        continue;
      }
      JMeterTreeModel model = JMeterElementUtils.getCurrentJMeterTreeModel();
      for (int j = initialChildCount; j < children.size(); j++) {
        TestElement child = children.get(j);
        try {
          model.addComponent(child, node);
        } catch (IllegalUserActionException e) {
          LOG.error("Error while adding the child '{}' to the element '{}'",
              child.getName(), node.getName(), e);
        }
      }
    }
  }

  private static JMeterTreeModel getCurrentJMeterTreeModel() {
    JMeterTreeModel model;
    if (!JMeterElementUtils.isNotRunningWithGui()) {
      model = GuiPackage.getInstance().getTreeModel();
    } else {
      model = new JMeterTreeModel();
    }
    return model;
  }

  private boolean isNullOrEmpty(List<?> list) {
    return list == null || list.isEmpty();
  }

  private void runAnalysis(List<RulesGroup> rulesGroups, boolean shouldCorrelate) {
    if (!shouldCorrelate) {
      disableCorrelation();
    } else {
      enableCorrelation();
    }

    AnalysisReporter.startCollecting();
    startAnalysisWithGroupRules(rulesGroups);
    AnalysisReporter.stopCollecting();
    enableCorrelation();
  }

  public void disableCorrelation() {
    AnalysisReporter.disableCorrelation();
  }

  public void enableCorrelation() {
    AnalysisReporter.enableCorrelation();
  }

  private void startAnalysisWithGroupRules(List<RulesGroup> rulesGroups) {
    updateRefVariable(rulesGroups);

    CorrelationEngine engine = new CorrelationEngine();
    engine.setCorrelationRules(rulesGroups, context.getRegistry());
    engine.setEnabled(true);
    engine.reset();

    List<HTTPSamplerProxy> samplers = context.getRecordingSamplers();
    List<SampleResult> sampleResults = context.getRecordingSampleResults();
    List<JMeterTreeNode> samplerNodes = context.getSamplerNodes();

    if (isNullOrEmpty(samplers) || isNullOrEmpty(sampleResults) || isNullOrEmpty(samplerNodes)) {
      LOG.error("No recording data found. Skipping analysis.");
      return;
    }

    run(sampleResults, samplerNodes, engine, samplers);
  }

  private void updateRefVariable(List<RulesGroup> rulesGroups) {
    for (RulesGroup rulesGroup : rulesGroups) {
      for (CorrelationRule rule : rulesGroup.getRules()) {
        String referenceName = rule.getReferenceName();
        if (rule.getCorrelationExtractor() != null) {
          rule.getCorrelationExtractor().setVariableName(referenceName);
        }

        if (rule.getCorrelationReplacement() == null) {
          continue;
        }

        rule.getCorrelationReplacement().setVariableName(referenceName);
      }
    }
  }

  @Override
  public void applySuggestions(List<CorrelationSuggestion> suggestions) {
    List<CorrelationRule> correlationRules = SuggestionsUtils.parseSuggestionsToRules(suggestions);
    List<RulesGroup> rulesGroups = SuggestionsUtils.parseToGroup(correlationRules);
    runAnalysis(rulesGroups, true);
  }

  public AnalysisContext getContext() {
    return context;
  }

  public void setContext(
      AnalysisContext context) {
    this.context = context;
  }
}

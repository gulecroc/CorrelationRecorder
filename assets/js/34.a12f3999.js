(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{347:function(e,t,a){"use strict";a.r(t);var r=a(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("h2",{attrs:{id:"dynamic-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-value"}},[e._v("#")]),e._v(" Dynamic Value")]),e._v(" "),t("p",[e._v("Dynamic values are variables that change each time a user interacts with a web application. Examples of dynamic\nvalues include session IDs, CSRF tokens, and timestamps. These values are used by the application to maintain\nstate and security.")]),e._v(" "),t("p",[e._v("When recording a test scenario using JMeter, dynamic values need to be captured and included in subsequent requests.\nFailure to do so can lead to errors and incorrect test results. However, capturing and handling dynamic values can\nbe challenging and requires careful configuration of the test script.")]),e._v(" "),t("p",[e._v("There are several potential issues that can arise when dealing with dynamic values in JMeter recordings.\nOne common issue is that the recorded values may be specific to a particular user session or request, and\ntherefore cannot be reused in subsequent requests without modification. Additionally, dynamic values may expire\nor become invalid after a certain period of time, requiring the test script to be updated to use new values.")]),e._v(" "),t("p",[e._v("Another issue is that dynamic values may need to be correlated or parameterized to ensure that each virtual user\nin the test uses a unique value. This can be complex and time-consuming, particularly for large or complex test\nscenarios.")]),e._v(" "),t("h2",{attrs:{id:"correlation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correlation"}},[e._v("#")]),e._v(" Correlation")]),e._v(" "),t("p",[e._v("As I mentioned earlier, dynamic values such as session IDs and tokens can change with each user interaction,\nand must be included in subsequent requests to properly simulate user behavior. Correlation allows JMeter to\nautomatically capture these values and replace them with unique values for each virtual user in the test.")]),e._v(" "),t("p",[e._v("The correlation process, or Correlation for shorts, typically involves identifying the dynamic value in the\nresponse using a regular expression or other pattern-matching mechanism, and then storing it in a JMeter\nvariable. This variable can then be used in subsequent requests by enclosing it in curly braces,\nlike this: ${myVariable}.")]),e._v(" "),t("p",[e._v("JMeter provides several built-in correlation functions, such as Regular Expression Extractor and CSS/JQuery Extractor,\nto simplify the process of capturing and storing dynamic values. However, more complex scenarios may require custom\nscripting to properly correlate values.")]),e._v(" "),t("h3",{attrs:{id:"manual-correlation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-correlation"}},[e._v("#")]),e._v(" Manual Correlation")]),e._v(" "),t("p",[e._v("Manually correlating dynamic values in JMeter involves several steps. Here is an overview of the process:")]),e._v(" "),t("p",[e._v("Identify the request that needs correlation: Begin by identifying the request that contains the dynamic value that\nneeds to be captured and used in subsequent requests.")]),e._v(" "),t("p",[e._v("Detect the argument that needs to be correlated: Once you have identified the request, you need to determine which\nargument within the request contains the dynamic value. This may involve examining the request payload or headers to\nlocate the relevant argument.")]),e._v(" "),t("p",[e._v("Locate the appearance of the dynamic value in responses: Once you have identified the argument, you need to locate the\ncorresponding dynamic value in the responses to the request. This may involve using a regular expression or other\npattern-matching mechanism to identify the value.")]),e._v(" "),t("p",[e._v("Add an extractor to obtain the value: Once you have located the dynamic value in the response, you need to add an\nextractor to capture it and store it in a JMeter variable. JMeter provides several built-in extractors, such as\nRegular Expression Extractor and CSS/JQuery Extractor, to simplify this process.")]),e._v(" "),t("p",[e._v("Store the value in a variable: Once you have extracted the dynamic value, you need to store it in a JMeter variable.\nThe variable name should be chosen carefully to ensure it is unique and descriptive.")]),e._v(" "),t("p",[e._v("Replace the variable in subsequent requests: Finally, you need to replace the original dynamic value in subsequent\nrequests with the JMeter variable containing the captured value. This ensures that each virtual user in the test uses\na unique value.")]),e._v(" "),t("p",[e._v("Manual correlation can be a time-consuming process, particularly when dealing with large or complex test scenarios\nthat involve multiple dynamic values. This is where Auto Correlation Recorder comes in handy.\nThe Auto Correlation Recorder provides several methods for automatically detecting and correlating dynamic\nvalues, including the use of regular expressions and JSON Path expressions.")]),e._v(" "),t("p",[e._v("Here are some of the Automatic Correlation methods supported by Auto Correlation Recorder:")]),e._v(" "),t("ol",[t("li",[e._v("RegEx (Regular Expression) Extractor")]),e._v(" "),t("li",[e._v("JSON Extractor")])]),e._v(" "),t("p",[e._v("By using the Auto Correlation Recorder, however, you can simplify the process of correlating dynamic values and save time when creating test scripts.")]),e._v(" "),t("p",[e._v("Please take a look at previous sections in the guide, where you can learn about the different mechanisms for\nautomatically correlating dynamic values, either after the recording is being done or after the whole recording\nis done.")]),e._v(" "),t("h2",{attrs:{id:"correlation-rule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correlation-rule"}},[e._v("#")]),e._v(" Correlation Rule")]),e._v(" "),t("p",[e._v('The Auto Correlation Recorder plugin provides a powerful feature called "Correlation Rules" that simplifies the process of\nmaking correlations in JMeter scripts. A Correlation Rule consists of three key components:')]),e._v(" "),t("p",[e._v("Reference Variable: This variable is used to store the dynamic value that will be extracted from a response and\nsubsequently used for replacements in subsequent requests.")]),e._v(" "),t("p",[e._v("Extractor: The Extractor component of a Correlation Rule allows you to configure how and where the dynamic value will\nbe extracted from the response. JMeter provides several built-in Extractors such as Regular Expression Extractor,\nCSS/JQuery Extractor, XPath Extractor, JSON Extractor and Boundary Extractor, to facilitate the process of\ncapturing dynamic values.")]),e._v(" "),t("p",[e._v("Replacement: The Replacement component of a Correlation Rule allows you to configure how and where the dynamic value\nwill be replaced in subsequent requests. You can specify which request parameter to replace, and how to format the\nreplacement string.")]),e._v(" "),t("p",[e._v('By defining Correlation Rules, you can easily extract and replace dynamic values in JMeter scripts without the need\nfor manual correlation. To learn more about how to create Correlation Rules and leverage this powerful feature,\nrefer to the "Correlation Rules" section of the JMeter User Manual.')]),e._v(" "),t("h2",{attrs:{id:"correlation-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correlation-template"}},[e._v("#")]),e._v(" Correlation Template")]),e._v(" "),t("p",[e._v("The Auto Correlation Recorder Plugin in JMeter utilizes Correlation Templates to maintain a simplified versioning of\nCorrelation Rules and to store and organize them together. A Correlation Template includes essential information\nsuch as version number, name, description, and changes log.")]),e._v(" "),t("p",[e._v("The Correlation Template serves as the foundation for the Automatic Correlation Analysis in the Auto Correlation Recorder\nPlugin. It allows the user to keep track of the version of the Correlation Rules being used for the analysis.\nThis feature ensures that the user is always working with the latest version of the Correlation Rules and helps\nto maintain the accuracy of the results.")]),e._v(" "),t("p",[e._v("Additionally, BlazeMeter provides several Correlation Templates that are designed for different technologies and\nprotocols. These templates can be used to facilitate the correlation process for specific types of applications\nand make it easier for users to get started with the Auto Correlation Recorder Plugin. To learn more about how to use\nCorrelation Templates and benefit from this powerful feature, refer to the JMeter User Manual.")]),e._v(" "),t("h2",{attrs:{id:"correlation-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#correlation-repository"}},[e._v("#")]),e._v(" Correlation Repository")]),e._v(" "),t("p",[e._v("The Correlation Repository is a powerful mechanism used by the Auto Correlation Recorder Plugin in JMeter to keep your set\nof Correlation Templates up-to-date. This feature allows for continuous updates of Correlation Templates from external\nsources.")]),e._v(" "),t("p",[e._v("The Correlation Repository is similar to a GitHub repository, where you can upload new versions of your templates to be\nstored and shared with others, while also being able to download templates uploaded by others. In Blazemeter,\nyou have access to both your company's private Repository and the public repository, where Blazemeter's refined\nCorrelation Templates are stored and updated regularly.")]),e._v(" "),t("p",[e._v("By utilizing the Correlation Repository, you can streamline the Correlation process and reduce the amount of time\nrequired to create and maintain Correlation Templates. This feature allows for collaboration between team members and\nsimplifies the process of sharing Correlation Templates across different projects. To learn more about how to use the\nCorrelation Repository and take advantage of this powerful feature, refer to the JMeter User Manual.")])])}),[],!1,null,null,null);t.default=o.exports}}]);
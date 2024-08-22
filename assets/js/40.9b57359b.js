(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{356:function(e,t,r){"use strict";r.r(t);var o=r(14),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"installing-the-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-plugin"}},[e._v("#")]),e._v(" Installing the Plugin")]),e._v(" "),t("p",[e._v("In this section, you will find instructions on how to install the plugin on your system.")]),e._v(" "),t("p",[e._v("The installation is usually the same regardless of your operating system. However, the configuration steps may vary\nsince it depends on how your proxy is configured.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),t("p",[e._v("Before attempting to install the plugin, make sure you have the following prerequisites:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("JMeter")]),e._v(": If you haven't done so already, download and install JMeter. You can find the latest version of\nJMeter "),t("a",{attrs:{href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("JMeter Plugins Manager")]),e._v(": Ensure that you have installed the JMeter Plugins Manager before installing\nthe Auto Correlation Recorder plugin. Learn how to install it in "),t("a",{attrs:{href:"https://jmeter-plugins.org/install/Install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article."),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("These two downloads are all you need to get started.")]),e._v(" "),t("h3",{attrs:{id:"integration-with-blazemeter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integration-with-blazemeter"}},[e._v("#")]),e._v(" Integration with BlazeMeter")]),e._v(" "),t("p",[e._v("If you want to use the plugin with BlazeMeter, you will also need to have the following:")]),e._v(" "),t("ol",[t("li",[e._v("A BlazeMeter account. If you don't have one, you can "),t("a",{attrs:{href:"https://accounts.blazemeter.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign up for free"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("A BlazeMeter api-key. If you don't have one, you can learn how to generate it from this article "),t("a",{attrs:{href:"https://guide.blazemeter.com/hc/en-us/articles/13329040973073-BlazeMeter-API-keys-",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlazeMeter Api Key"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("The installation of the plugin is usually done using the Plugin Manager, which is the recommended way of installing, however,\nyou can also do it manually. This section will cover both methods.")]),e._v(" "),t("h3",{attrs:{id:"with-plugin-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-plugin-manager"}},[e._v("#")]),e._v(" With Plugin Manager")]),e._v(" "),t("ol",[t("li",[e._v("Launch "),t("strong",[e._v("JMeter")]),e._v(" and open the "),t("strong",[e._v("JMeter Plugins Manager")]),e._v(".")]),e._v(" "),t("li",[e._v('In the Available Plugins tab, search and select "'),t("strong",[e._v("BlazeMeter - Auto Correlation Recorder Plugin")]),e._v('".')]),e._v(" "),t("li",[e._v('Click the "'),t("strong",[e._v("Apply Changes and Restart JMeter")]),e._v('" button and wait for the installation process to complete.')])]),e._v(" "),t("p",[e._v("Once JMeter restarts, the Auto Correlation Recorder plugin will be installed.")]),e._v(" "),t("h3",{attrs:{id:"manually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually"}},[e._v("#")]),e._v(" Manually")]),e._v(" "),t("ol",[t("li",[e._v("Go to the "),t("a",{attrs:{href:"https://jmeter-plugins.org/?search=Blazemeter%20-%20Auto%20Correlation%20Recorder%20Plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auto Correlation Recorder plugin page"),t("OutboundLink")],1),e._v(" and download the\nlatest version of the plugin, with the dependencies.")]),e._v(" "),t("li",[e._v("Place the Plugin jar in the ext folder of your JMeter installation. The ext folder is usually located in\n"),t("code",[e._v("<JMeter_Home>/lib/ext")]),e._v(".")]),e._v(" "),t("li",[e._v("Place the dependencies jars in the lib folder of your JMeter installation. The lib folder is usually located in\n"),t("code",[e._v("<JMeter_Home>/lib")]),e._v(".")]),e._v(" "),t("li",[e._v("Restart JMeter.")])]),e._v(" "),t("h2",{attrs:{id:"verifying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying"}},[e._v("#")]),e._v(" Verifying")]),e._v(" "),t("p",[e._v("You can verify the plugin being installed by opening the Plugins Manager and checking the Installed Plugins tab. Search for\nthe Auto Correlation Recorder plugin and make sure it is listed there.")]),e._v(" "),t("p",[e._v("Another way to ensure the plugin is properly installed, is by attempting to load the Auto Correlation Recorder template. To do so,\nfollow these steps:")]),e._v(" "),t("ol",[t("li",[e._v("Launch "),t("strong",[e._v("JMeter")]),e._v(" and open the "),t("strong",[e._v("File")]),e._v(" menu.")]),e._v(" "),t("li",[e._v("Select the "),t("strong",[e._v("Templates")]),e._v(" option and then click on "),t("strong",[e._v("Load")]),e._v(".")]),e._v(" "),t("li",[e._v("Search for the "),t("strong",[e._v("Auto Correlation Recorder")]),e._v(" template and click on "),t("strong",[e._v("Open")]),e._v(".")]),e._v(" "),t("li",[e._v("If the template loads successfully, the plugin is properly installed.")])]),e._v(" "),t("h2",{attrs:{id:"updating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[e._v("#")]),e._v(" Updating")]),e._v(" "),t("p",[e._v("If you already had the plugin installed and want to update it, you can do so by following the same steps as the installation,\nbut instead of searching the plugin in the Available Plugins tab, search for it in the Installed Plugins tab.")]),e._v(" "),t("p",[e._v("In case there is a new version of the plugin, the name of the extension will be bold and list of updated artifacts will be listed. Press "),t("em",[e._v("Install and Restart JMeter")])]),e._v(" "),t("h2",{attrs:{id:"uninstall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uninstall"}},[e._v("#")]),e._v(" Uninstall")]),e._v(" "),t("p",[e._v("If you want to uninstall the plugin, you can do so by following these steps:")]),e._v(" "),t("ol",[t("li",[e._v("Launch "),t("strong",[e._v("JMeter")]),e._v(" and open the "),t("strong",[e._v("JMeter Plugins Manager")]),e._v(".")]),e._v(" "),t("li",[e._v('In the Installed Plugins tab, search and select "'),t("strong",[e._v("BlazeMeter - Auto Correlation Recorder Plugin")]),e._v('".')]),e._v(" "),t("li",[e._v('Uncheck the plugin and click the "'),t("strong",[e._v("Apply Changes and Restart JMeter")]),e._v('" button.')]),e._v(" "),t("li",[e._v("Wait for the uninstallation process to complete.")]),e._v(" "),t("li",[e._v("Restart JMeter.")])]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("Before we jump right into recording, let's take a look at the basic configuration options available for the Auto Correlation Recorder plugin.")]),e._v(" "),t("h3",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("p",[e._v("Here is a list of properties that you need to configure in order to use the Auto Correlation Recorder plugin:")]),e._v(" "),t("ol",[t("li",[e._v("Disable redirect disabling: Set the "),t("code",[e._v("proxy.redirect.disabling")]),e._v(" property to false in your "),t("code",[e._v("user.properties")]),e._v(" file.\nThis is required for a proper and automatic correlation experience.")]),e._v(" "),t("li",[e._v("Set deflate mode: If you plan to record in "),t("em",[e._v("Siebel CRM environments")]),e._v(", set the "),t("code",[e._v("httpclient4.deflate_relax_mode")]),e._v("\nproperty to true in your "),t("code",[e._v("user.properties")]),e._v(" file. This will help you avoid "),t("code",[e._v("Unexpected end of input stream")]),e._v(" errors.")]),e._v(" "),t("li",[e._v("(Optional) Set the scope of post-processors to all: Set the "),t("code",[e._v("Sample.scope")]),e._v(" property to "),t("code",[e._v("all")]),e._v(" in your\n"),t("code",[e._v("user.properties")]),e._v(" file. This will help you to avoid the post-processors to only limit to the main sampler.")])]),e._v(" "),t("h3",{attrs:{id:"blazemeter-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blazemeter-api-key"}},[e._v("#")]),e._v(" BlazeMeter Api Key")]),e._v(" "),t("p",[e._v("If you are planning on using the integration with Blazemeter, you need to provide your BlazeMeter api-key.\nYou can do that by doing one of the following options:")]),e._v(" "),t("p",[t("strong",[e._v("1. Drop the file in your bin directory")])]),e._v(" "),t("p",[e._v("It is as simple as it sounds. You just need to drop the "),t("code",[e._v("api-key.json")]),e._v(" file in your "),t("code",[e._v("<JMeter_Home>/bin")]),e._v(" directory,\nmaking sure you don't have any other "),t("code",[e._v("api-key.json")]),e._v(" file in that directory.")]),e._v(" "),t("p",[e._v("Restart JMeter")]),e._v(" "),t("p",[t("strong",[e._v("2. Configure the properties file")])]),e._v(" "),t("p",[e._v("If you don't want to drop the api-key.json file in your bin directory, you can provide the path to your api-key.json file in the configuration.\nTo do that, you need to open the "),t("code",[e._v("blazemeter.properties")]),e._v(" file in your "),t("code",[e._v("<JMeter_Home>/bin")]),e._v(" directory and add the following line:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("blazemeter.api.key.file=<path_to_your_api_key.json>\n")])])]),t("p",[e._v("Restart JMeter")]),e._v(" "),t("p",[e._v("Note: make sure the path you provide is correct, it points to a file, rather than a folder, and the file exists.\nIt should look something like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("blazemeter.api.key.file=/Users/username/.blazemeter/api-key.json\n")])])]),t("h3",{attrs:{id:"proxy-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configurations"}},[e._v("#")]),e._v(" Proxy configurations")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("em",[e._v("If you have already configured the local proxy, you can skip this section.")])])]),e._v(" "),t("p",[e._v("You might also follow the steps in JMeter's Official documentation as can be seen in\n"),t("a",{attrs:{href:"https://jmeter.apache.org/usermanual/jmeter_proxy_step_by_step.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article."),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To configure JMeter to record HTTP/HTTPS traffic in "),t("strong",[e._v("Chrome")]),e._v(", "),t("strong",[e._v("Firefox")]),e._v(", or "),t("strong",[e._v("Opera")]),e._v(", you need to set up a proxy server in\nJMeter and configure your web browser to use that proxy.")]),e._v(" "),t("h4",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),t("h4",{attrs:{id:"_1-configure-jmeter-proxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-configure-jmeter-proxy"}},[e._v("#")]),e._v(" 1. "),t("strong",[e._v("Configure JMeter Proxy")])]),e._v(" "),t("ol",[t("li",[e._v("Open JMeter and create a new Test Plan.")]),e._v(" "),t("li",[e._v('Right-click on the Test Plan and select "Add" > "Threads (Users)" > "Thread Group".')]),e._v(" "),t("li",[e._v('Right-click on the Thread Group and select "Add" > "Logic Controller" > "Recording Controller".')]),e._v(" "),t("li",[e._v('Right-click on the Recording Controller and select "Add" > "Sampler" > "HTTP(S) Test Script Recorder".')]),e._v(" "),t("li",[e._v('In the HTTP(S) Test Script Recorder, click on the "Start" button to start the proxy server.')]),e._v(" "),t("li",[e._v('Click on the "HTTP(S) Test Script Recorder" element in the tree view and configure the following settings:')]),e._v(" "),t("li",[e._v('Set the "Target Controller" to the Recording Controller you created in step 3.')]),e._v(" "),t("li",[e._v('Set the "Port" to an available port (e.g. 8888).')]),e._v(" "),t("li",[e._v('Set the "Grouping" to "Put each group in a new transaction controller".')]),e._v(" "),t("li",[e._v('Click on the "SSL Manager" button and create a new SSL certificate.')])]),e._v(" "),t("h4",{attrs:{id:"_2-configure-web-browser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-configure-web-browser"}},[e._v("#")]),e._v(" "),t("strong",[e._v("2. Configure Web Browser")])]),e._v(" "),t("ol",[t("li",[e._v("Open Chrome/Firefox/Opera and go to the settings menu.")]),e._v(" "),t("li",[e._v('Search for "proxy" or "network settings".')]),e._v(" "),t("li",[e._v('Under the "Proxy" section, select "Manual proxy configuration".')]),e._v(" "),t("li",[e._v('In the "HTTP Proxy" field, enter "localhost" and the port number you set in step 6 of the JMeter configuration (e.g. 8888).')]),e._v(" "),t("li",[e._v('Click on the "OK" button to save the settings.')])]),e._v(" "),t("h4",{attrs:{id:"_3-record-traffic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-record-traffic"}},[e._v("#")]),e._v(" "),t("strong",[e._v("3. Record Traffic")])]),e._v(" "),t("ol",[t("li",[e._v('In JMeter, click on the "Start" button in the HTTP(S) Test Script Recorder to start recording.')]),e._v(" "),t("li",[e._v("In your web browser, navigate to the website you want to record.")]),e._v(" "),t("li",[e._v("Perform the actions you want to record (e.g. filling out forms, clicking links).")]),e._v(" "),t("li",[e._v('In JMeter, click on the "Stop" button to stop recording.')])]),e._v(" "),t("h4",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS")]),e._v(" "),t("h5",{attrs:{id:"_1-configure-jmeter-proxy-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-configure-jmeter-proxy-2"}},[e._v("#")]),e._v(" 1. "),t("strong",[e._v("Configure JMeter Proxy")])]),e._v(" "),t("ol",[t("li",[e._v("Open JMeter and create a new Test Plan.")]),e._v(" "),t("li",[e._v('Right-click on the Test Plan and select "Add" > "Threads (Users)" > "Thread Group".')]),e._v(" "),t("li",[e._v('Right-click on the Thread Group and select "Add" > "Logic Controller" > "Recording Controller".')]),e._v(" "),t("li",[e._v('Right-click on the Recording Controller and select "Add" > "Sampler" > "HTTP(S) Test Script Recorder".')]),e._v(" "),t("li",[e._v('In the HTTP(S) Test Script Recorder, click on the "Start" button to start the proxy server.')]),e._v(" "),t("li",[e._v('Click on the "HTTP(S) Test Script Recorder" element in the tree view and configure the following settings:')])]),e._v(" "),t("ul",[t("li",[e._v('Set the "Target Controller" to the Recording Controller you created in step 3.')]),e._v(" "),t("li",[e._v('Set the "Port" to an available port (e.g. 8888).')]),e._v(" "),t("li",[e._v('Set the "Grouping" to "Put each group in a new transaction controller".')])]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v('Click on the "SSL Manager" button and create a new SSL certificate.')])]),e._v(" "),t("h5",{attrs:{id:"_2-configure-web-browser-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-configure-web-browser-2"}},[e._v("#")]),e._v(" "),t("strong",[e._v("2. Configure Web Browser")])]),e._v(" "),t("ol",[t("li",[e._v("Open Chrome/Firefox/Opera and go to the settings menu.")]),e._v(" "),t("li",[e._v('Search for "proxy" or "network settings".')]),e._v(" "),t("li",[e._v('Under the "Proxy" section, select "Manual proxy configuration".')]),e._v(" "),t("li",[e._v('In the "HTTP Proxy" field, enter "localhost" and the port number you set in step 6 of the JMeter configuration (e.g. 8888).')]),e._v(" "),t("li",[e._v('Click on the "OK" button to save the settings.')])]),e._v(" "),t("h5",{attrs:{id:"_3-record-traffic-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-record-traffic-2"}},[e._v("#")]),e._v(" "),t("strong",[e._v("3. Record Traffic")])]),e._v(" "),t("ol",[t("li",[e._v('In JMeter, click on the "Start" button in the HTTP(S) Test Script Recorder to start recording.')]),e._v(" "),t("li",[e._v("In your web browser, navigate to the website you want to record.")]),e._v(" "),t("li",[e._v("Perform the actions you want to record (e.g. filling out forms, clicking links).")]),e._v(" "),t("li",[e._v('In JMeter, click on the "Stop" button to stop recording.')])]),e._v(" "),t("h4",{attrs:{id:"recording-on-localhost-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recording-on-localhost-configurations"}},[e._v("#")]),e._v(" Recording on Localhost configurations")]),e._v(" "),t("p",[e._v("We need to configure the "),t("em",[e._v("local proxy")]),e._v(", otherwise, "),t("strong",[e._v("you will not be able to record\nany requests")]),e._v('. To do so, take a look at the "Configure your browser to use the JMeter Proxy" section in the')]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If the server you are recording is running in your local machine, you will need to configure your browser to\nallow recording of local requests.")]),e._v(" "),t("p",[e._v('In such case, you will need to search for "How to configure the JMeter proxy to record local requests" and follow\nthe instructions for your browser.')]),e._v(" "),t("p",[e._v("In "),t("strong",[e._v("Firefox")]),e._v(", for instance, go to "),t("code",[e._v("about:config")]),e._v(" and set "),t("code",[e._v("network.proxy.allow_hijacking_localhost")]),e._v(" to true.")])]),e._v(" "),t("p",[e._v("After this, you should be able to start recording.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
# Mendix Flashlight

This widget gives you the ability to turn on and off the flashlight on your mobile device. The widget utilises the phonegap flashlight [widget](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin)

The widget contains:

- Set the buttons text.
- The phonegap flashlight Javascript

## Contributing

For more information on contributing to this repository visit [Contributing to a GitHub repository](https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)!

## Typical usage scenario

Use this template to start building a widget for Mendix 5.
Alter this README.md file and describe what your widget does.
 
## Setting up
### Config XML
In order to use flashlight functionality you need to include the following plugin in your config.xml for your application.
`<gap:plugin name="nl.x-services.plugins.flashlight" />`

For more information on how to setup a phonegap application in mendix and configure the config.xml use this reference [guide](https://github.com/mendix/MxPushNotifications#creating-phonegap-app)

### Including the flashlight.js
In order for the widget to work you will need to inlude the following javascript load in your mendix index.html

`<script type="text/javascript" src="widgets/MxFlashlight/lib/Flashlight.js"></script>`


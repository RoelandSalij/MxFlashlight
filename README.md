# Mendix Flashlight

This widget gives you the ability to turn on and off the flashlight on your mobile device. The widget utilises the phonegap flashlight [widget](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin). This widget supports IOS, Android and WP8.

The widget contains:

- The ability to set the button text
- The phonegap flashlight Javascript

## Contributing

For more information on contributing to this repository visit [Contributing to a GitHub repository](https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)!

## Typical usage scenario

You would typically use this widget if you want to be able to turn on and off the flashlight on your windows, ios or android device. 
 
## Setting up
### Config XML
In order to use flashlight functionality you need to include the following plugin in your config.xml for your application.

`<gap:plugin name="nl.x-services.plugins.flashlight" />`

For more information on how to setup a phonegap application in mendix and configure the config.xml use this reference [guide](https://github.com/mendix/MxPushNotifications#creating-phonegap-app).

### Including the flashlight.js
In order for the widget to work you will need to include the following javascript load in your mendix index.html.

`<script type="text/javascript" src="widgets/MxFlashlight/lib/Flashlight.js"></script>`


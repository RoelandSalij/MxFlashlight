/*jslint white:true, nomen: true, plusplus: true */
/*global mx, define, require, browser, devel, console */
/*mendix */
/*
    MxFlashlight
    ========================

    @file      : MxFlashlight.js
    @version   : 1.0
    @author    : Simon Black
    @date      : Sat, 21 Mar 2015 17:34:16 GMT
    @copyright : 
    @license   : Apache

    Documentation
    ========================
    Describe your widget here.
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
require({
    packages: [{ name: 'flashlight', location: '../../widgets/MxFlashlight/lib', main: 'Flashlight.js' }]
}, [
    'dojo/_base/declare', 'mxui/widget/_WidgetBase', 'dijit/_TemplatedMixin',
    'mxui/dom', 'dojo/dom', 'dojo/query', 'dojo/dom-prop', 'dojo/dom-geometry', 'dojo/dom-class', 'dojo/dom-style', 'dojo/dom-construct', 'dojo/_base/array', 'dojo/_base/lang', 'dojo/text','dojo/text!MxFlashlight/widget/template/MxFlashlight.html'
], function (declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, domQuery, domProp, domGeom, domClass, domStyle, domConstruct, dojoArray, lang, text, widgetTemplate) {
    'use strict';
    
    // Declare widget's prototype.
    return declare('MxFlashlight.widget.MxFlashlight', [ _WidgetBase, _TemplatedMixin ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // Parameters configured in the Modeler.
        btnName: null,
  

        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.
        _handle: null,
        _contextObj: null,
        _objProperty: null,

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {
            this._objProperty = {};
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            console.log(this.id + '.postCreate');

            this._setupEvents();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            console.log(this.id + '.update');

            this._contextObj = obj;
            this._updateRendering();

            callback();
        },

        // mxui.widget._WidgetBase.enable is called when the widget should enable editing. Implement to enable editing if widget is input widget.
        enable: function () {

        },

        // mxui.widget._WidgetBase.enable is called when the widget should disable editing. Implement to disable editing if widget is input widget.
        disable: function () {

        },

        // mxui.widget._WidgetBase.resize is called when the page's layout is recalculated. Implement to do sizing calculations. Prefer using CSS instead.
        resize: function (box) {

        },

        // mxui.widget._WidgetBase.uninitialize is called when the widget is destroyed. Implement to do special tear-down work.
        uninitialize: function () {
            // Clean up listeners, helper objects, etc. There is no need to remove listeners added with this.connect / this.subscribe / this.own.
        },

        _setupEvents: function () {
             this.domNode.innerHTML = this.btnName;
            if(typeof window.plugins !== "undefined"){
               
            if(typeof window.plugins.flashlight !== "undefined"){
            this.connect(this.domNode, 'click', function () {
                
                window.plugins.flashlight.available(function(isAvailable) {
                  if (isAvailable) {
                    window.plugins.flashlight.toggle();

                  } else {
                    console.log("Flashlight not available on this device");
                  }
                });
            });
            
            }
        }
            else{
                console.log('flashlight plugin not found');
            }
        },

        _updateRendering: function () {
            
        },

        _resetSubscriptions: function () {
            // Release handle on previous object, if any.
        }
    });
});

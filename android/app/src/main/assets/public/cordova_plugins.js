
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-network-information.Connection",
          "file": "plugins/cordova-plugin-network-information/www/Connection.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "Connection"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "cordova-plugin-network-information.network",
          "file": "plugins/cordova-plugin-network-information/www/network.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "navigator.connection",
          "navigator.network.connection"
        ]
        },
      {
          "id": "cordova-sqlite-storage.SQLitePlugin",
          "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
          "pluginId": "cordova-sqlite-storage",
        "clobbers": [
          "SQLitePlugin"
        ]
        },
      {
          "id": "cordova-plugin-nativeaudio.nativeaudio",
          "file": "plugins/cordova-plugin-nativeaudio/www/nativeaudio.js",
          "pluginId": "cordova-plugin-nativeaudio",
        "clobbers": [
          "window.plugins.NativeAudio"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-geolocation": "4.1.0",
      "cordova-plugin-nativeaudio": "3.0.9",
      "cordova-plugin-network-information": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2",
      "cordova-plugin-whitelist": "1.3.3",
      "cordova-sqlite-storage": "5.1.0"
    };
    // BOTTOM OF METADATA
    });
    
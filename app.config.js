import 'dotenv/config'

export default {
  "expo": {
    "plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location.",
          "locationAlwaysPermission": "Allow $(PRODUCT_NAME) to use your location.",
          "locationWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location.",
          "isIosBackgroundLocationEnabled": true,
          "isAndroidBackgroundLocationEnabled": true
        }
      ]
    ],
    "name": "open-spot-expo",
    "slug": "open-spot-expo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "open-spot-expo"
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": process.env.MAPS_API_KEY,
        }
      },
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.FOREGROUND_SERVICE"
      ],
      "package": "com.gabalfa.openspotexpo"
    },
    "web": {
      "bundler": "metro",
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "e47225e9-7064-4194-b5b3-bc2967e2dd12"
      }
    }
  }
}

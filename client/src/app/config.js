/*
* @Description: Application wide constants
* */
var cloudStbApp_config = angular.module('cloudStbApp.config', []);

//Define the constants in a config file
var config_items = {
  'WEBSERVICE_CONFIG': {
      'SERVER_URL': 'http://192.168.0.99:8080'
  }
};

angular.forEach(config_items, function (key, value) {
    cloudStbApp_config.constant(value, key);
});
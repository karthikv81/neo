var path = require('path');

/* https://developers.facebook.com/docs/sharing/web
*  https://developers.facebook.com/docs/plugins/like-button
* */

module.exports = {
  "server": {
    "listenPort": 8080,                                   // The port on which the server is to listen (means that the app is at http://localhost:3000 for instance)
    "securePort": 8433,                                   // The HTTPS port on which the server is to listen (means that the app is at https://localhost:8433 for instance)
    "distFolder": path.resolve(__dirname, '../../client/dist'),  // The folder that contains the application files (note that the files are in a different repository) - relative to this file
    "mongoHost" : 'localhost',
    "mongoPort"           : 27017,
    "DB"                  : 'Cloud-WyPlay',
    "roviCollection"      : "rovi",
    "tribuneCollection"   : "tribune"
  },
  twitter: {
      consumerKey: 'lrDlPQpxVIjjJkZRrFKML39j7',
      consumerSecret:'UTAbXSkhvr4twQ0cLF1zk03Pjqhmi86gHmgvGJI9KuCbRihGZ7',
      accessToken: '3160833378-Szl7RSF2yogMR1jAlIeP8BR85QWvUTa5oJ0XFOG',
      accessTokenSecret: 'VTvNApA6ecGkAipq8pNjvCAcGkciv76VgADrSGHo59L9q'
  },
  facebook: {
      appID: '668782709889660',
      appSecret:'ba6afaf188e8582239dc760c30d1f41d',
      apiVersion: 'v.2.4',
      fbPageID: '192364724190611',
      cloudEPGUserAccessToken: 'CAACEdEose0cBAMTv7tSLBgJxi4Trx6fZAr9hvHLNduIQiMygb1uIuCsZBcwjNk2G6nFnlf6UdCA2CZCTjHp4iwgXWrhj8SfjJKfifECm5jmSbZClLZBr18HSYAlzbjjYZCxT6hLOLUqxFMOGktqR6wFVpRHl2bvsWxaZBS25uxwqOn2UR20elwlm4jwXho1nTVtwpaSzgk3PAODLXc322J3olgvlAL4TgsZD',
      cloudEPGAppUserAccessToken: 'CAAJgQRva2nwBAIoXCq9JiBmz4AQJIZCKeyAq6aDlZBSOyFJHDp2HaDTIKQZBkKhsgmvNAX16qcyTmwKR2Cu7PTq0CwZANG3Jy0FMZAZCrTVPuEre8T8XEm6IRNmFR07hBytrZA4ea59iBYqqsGzEr2wSYxQgskSYdsE1njEXRnSgZCZAFScnkVdIgRapjQQEgkcciIVtBZAx7ZBJ0r9QlZBZBDHmIFgWqbXzOdGUZD',
      cloudEPGPageAccessToken: 'CAACEdEose0cBADnnMFSGdSGB865HJOTs0sduNSIkINZBvZAsGe9LcssD2ssWqjL4aFwyMB6Tu4ZCvxiuEGvUNUcmfMIzWLjhuP7QWn0DfVSZCEvfoMJXDcRXMcVWJ94B7I2B7hqCiFUG6cSFNvtx1t8QO1owjpnmZCqZApfG0fVM0qETx66HEbYhfAoslVCrYZD'
    }
};
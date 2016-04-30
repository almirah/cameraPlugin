// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);
app.controller('CameraCtrl', function($scope, $cordovaCamera) {
  $scope.pictureUrl = 'http://placehold.it/200x200';
  $scope.tp = function() {
      var options = {
         destinationType: Camera.DestinationType.DATA_URL,
         encodingType: Camera.EncodingType.JPEG
       }
      $cordovaCamera.getPicture(options)
        .then(function(data) {
       // alert(data);
           $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
           console.log('camera data: ' + angular.toJson(data));
        }, function(error) {
                    console.log('camera error: ' + angular.toJson(data));
        });
  };
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

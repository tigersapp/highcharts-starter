angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {

  $scope.thispt = -1;
  $scope.thisvalue = -1;

  //$scope.$watch('chartConfig.plotOptions',function(newValue,oldValue){
  //    console.log($scope.chartConfig.plotOptions);
  //});

  $scope.testf = function (thisvalue){
    console.log('method 2:'+thisvalue);
    $scope.thisvalue = thisvalue;     
  };

  $scope.chartConfig = {
    "options": {
      "chart": {
        "type": "line"
      },
      "plotOptions": {
        "series": {
          "stacking": "",
          "point" : {
            "events": {
              "click": function () {
                //alert('value: ' + this.y);
                console.log($scope.thispt);    

                $scope.thispt = this.y;        // 页面没有同步update

                $scope.testf(this.y);          // 这也页面也没有同步update

              }
            }
          }
        }
      }
    },
    "series": [
      {
        "name": "Some data",
        "data": [ 1, 2, 4, 7, 3 ],
        "id": "series-0",
        "type": "line"
      },
      {
        "name": "Some data 3",
        "data": [ 3, 1, null, 5, 2 ],
        "connectNulls": true,
        "id": "series-1"
      },
      {
        "name": "Some data 2",
        "data": [ 5, 2, 2, 3, 5 ],
        "type": "column",
        "id": "series-2"
      },
      {
        "name": "My Super Column",
        "data": [ 1, 1, 2, 3, 2 ],
        "type": "column",
        "id": "series-3"
      }
    ],
    "title": {
      "text": "Hello"
    },
    "credits": {
      "enabled": false
    },
    "loading": false,
    "size": {}
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

});

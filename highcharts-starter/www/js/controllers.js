angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {

  $scope.thisDataPoint = -999;
  $scope.testArray = ['A','B','C','D','E','F','G','H','I','J'];
  $scope.displayArray = $scope.testArray;

  var assignValue = function (dataPoint){
    // 根据图表上点击获得的值，决定这个数组显示的元素的个数
    $scope.thisDataPoint = dataPoint;
    $scope.displayArray = $scope.testArray.slice(0, dataPoint);      
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
              "click": function () { $scope.$apply(assignValue(this.y))}
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
    "size": {"height":250},
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

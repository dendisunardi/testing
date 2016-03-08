var app = angular.module('myApp', []);

/* $http ajax calls really belongs in a service, 
but I'll be using them inside the controller for this demo */ 

app.controller('myCtrl', function($scope, $http) {
  $http.get('./ang.json').then(function(data) {
    $scope.languages = data;
  });
  //inputting json directly for this example
  $scope.languages = [        
    {name:"English", value:0},
    {name:"Spanish", value:1},
    {name:"German", value:3},
    {name:"Russian", value:2},
    {name:"Korean", value:1}
  ];
  $scope.save = function() {
   $http.post('./ang.json', $scope.languages).then(function(data, err) {
      if(err){
        console.log("no connection");
      }
      $scope.msg = 'Data saved';
    });
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
});
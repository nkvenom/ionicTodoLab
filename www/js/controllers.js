angular.module('starter.controllers', [])

.controller('AddTodoCtrl', function($scope, Todos) {

  $scope.newTodo = {};
  $scope.addTodo = function() {
    console.log($scope);
    Todos.add($scope.newTodo);
    $scope.newTodo = {};
  };
})

.controller('LolCtrl', function($scope) {})

.controller('TodosCtrl', function($scope, Todos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  console.log("Todos Controller");
  $scope.todos = Todos.all();
  $scope.remove = function(todo) {
    Todos.remove(todo);
  };
})
.controller('TodoDetailCtrl', function($scope, $stateParams, Todos) {
  console.log("todo detail");
  $scope.todo = Todos.get($stateParams.todoId);
});

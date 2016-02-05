angular.module('starter.services', [])

.factory('Todos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var todos = [{
    id: 0,
    name: 'Buy Milk',
    completed: false
  }, {
    id: 1,
    name: 'Compile Javascript',
    completed: false
  }, {
    id: 2,
    name: 'Transpile Javascript',
    completed: false
  }, {
    id: 3,
    name: 'Profile Typescript',
    completed: false
  }, {
    id: 4,
    name: 'Inspect WebAssembly',
    completed: false
  }];

  return {
    all: function() {
      return todos;
    },
    remove: function(todo) {
      todos.splice(todos.indexOf(todo), 1);
    },    
    add: function(todo) {
      // console.log(todos);
      // console.log(todo);
      todo.id = todos.length;
      // todos = todos.splice(0);
      todos.push(todo);
    },
    get: function(todoId) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === parseInt(todoId)) {
          return todos[i];
        }
      }
      return null;
    }
  };
});

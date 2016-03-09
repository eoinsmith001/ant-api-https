angular.module('firstApp', ['stuffService'])
.controller('mainController', function(Stuff) {
  var vm = this;
  vm.message = 'pending...';
  var stuff = Stuff.all()
  .then(function(stuff) {
    vm.message  = stuff.data.message;
  })
  .catch(function(err) {
    console.error(err);
  });
});

angular.module('stuffService', [])
.factory('Stuff', function($http) {
  var myFactory = {};
  myFactory.all = function() {
    return $http.get('https://localhost:4000/api');
  };
  return myFactory;
});

(function (ang) {
  var app = ang.module('Blog', []);

  app.controller('MainController', ['$http', function ($http) {
    var vm = this;

    vm.lang = 'en';
    vm.category = '';

    $http.get('data/posts.json')
       .then(function(res) {
         vm.posts = res.data.posts;
        });
  }]);
}(angular));
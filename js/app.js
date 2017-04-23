(function (ang) {
  var app = ang.module('Blog', []);

  app.controller('MainController', ['$http', function ($http) {
    var vm = this;

    vm.lang = 'en';
    vm.category = '';
    vm.modalPost = {};
    vm.showModal = false;

    vm.translations = {
      en: {
        readMore: 'Read more'
      },
      es: {
        readMore: 'Leer más'
      }
    };

    $http.get('data/posts.json')
       .then(function(res) {
         vm.posts = res.data.posts;
        });

    vm.openPost = function (post) {
      $http.get('data/' + post + '.json')
       .then(function(res) {
         vm.modalPost = res.data;
         vm.showModal = true;
        });
    };
  }]);

  app.filter('renderHtml', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
  }]);

}(angular));
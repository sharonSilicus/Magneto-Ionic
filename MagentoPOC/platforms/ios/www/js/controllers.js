angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CategoriesCtrl', function($scope) {

            // Category Array with Category Class Object
            $scope.categories = [
                       { title: 'Electronics', id: 1, image: 'Electronics.png', description: 'Electronics from computers to hair dryers' },
                       { title: 'Auto', id: 2, image: 'Auto.png', description: 'Cars from brand new to used ones' },
                       { title: 'Entertainment', id: 3, image: 'Entertainment.png', description: 'Movies, music from bollywood to hollywood' },
                       { title: 'Fashion', id: 4, image: 'Fashion.png', description: 'Clothes for brand men and women' },
                       { title: 'Lifestyle', id: 5, image: 'Lifestyle.png', description: 'Products that matched your lifesyte' },
                       { title: 'Travel', id: 6, image: 'Travel.png', description: 'Travel packages from Shimla to Singapore' }
    ];
})

.controller('BrowseStore',function($scope, $http, $activityIndicator, $timeout)
{
    $scope.actionToDo = "Browse Store";
    
    $scope.counter = 2;
            
    $activityIndicator.startAnimating();

        
    // Get Products from Magento Web site via REST API
    $http({
          method: 'GET',
          url: 'http://cocoa2code.com/magento-test/api/rest/products?page='+$scope.counter+'&limit=20'
          }).then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                  $activityIndicator.stopAnimating();
                  $scope.status = response.status;
                  console.log('Request Status is',$scope.status);
                  $scope.data = response.data;
//                  console.log($scope.data);
                  
                  // Assign Product array from JSON
                  $scope.products = angular.fromJson(response.data);
//                  console.log($scope.products);
                  
                  }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  $activityIndicator.stopAnimating();
//                  console.log(response);
                  
        });
});



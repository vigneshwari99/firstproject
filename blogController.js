var blogModule = angular.module('blogModule', []);
app.controller('blogController',['$scope','$modalInstance',function($scope,$modalInstance)
{
  $scope.closeModal=function(){
   $scope.$modalInstance.close();
  }
}]);

app.controller('blogController', ['$scope', function ($scope) {
    console.log('controller called');
    $scope.record = {};
    $scope.records = [{
      title: 'flowers',
      review: 'Jeep eep is all set to expand its India line-up to five SUVs by 2020. Joining the existing range next will be the Renegade, currently the smallest SUV on Jeep’s global line-up. Neo-retro in terms of styling, the Renegade will slot in below the Compass. Here are five things you need to know about the Renegade: is all set to expand its India line-up to five SUVs by 2020. Joining the existing range next will be the Renegade, currently the smallest SUV on Jeep’s global line-up. Neo-retro in terms of styling, the Renegade will slot in below the Compass. Here are five things you need to know about the Renegade:',
      imageurl: 'picture/images.jpg'
    },
    {
      title: 'cars',
      review: 'Jeep is riding higheep eep is all set to expand its India line-up to five SUVs by 2020. Joining the existing range next will be the Renegade, currently the smallest SUV on Jeep’s global line-up. Neo-retro in terms of styling, the Renegade will slot in below the Compass. Here are five things you need to know about the Renegade: is all set to expand its India line-up to five SUVs by 2020. Joining the existing range next will be the Renegade, currently the smallest SUV on Jeep’s global line-up. Neo-retro in terms of styling, the Renegade will slot in below the Compass. Here are five things you need to know about the Renegade: with the success of the Compass in the Indian market as well as internationally, but this midsize offering was built on the popularity of Jeep’s entry-level SUV, the Renegade. And it is about time that the Renegade, on sale globally since 2015, received its mid-life refresh. Expected to be revealed in 2018, the Jeep Renegade facelift has been spied',
      imageurl: 'picture/down.jpg'
    },
    {
      title: 'cars-models',
      review: 'Jeep is riding high with the success of the Compass in the Indian market as well as internationally, but this midsize offering was built on the popularity of Jeep’s entry-level SUV, the Renegade. And it is about time that the Renegade, on sale globally since 2015, received its mid-life refresh. Expected to be revealed in 2018, the Jeep Renegade facelift has been spied',
      imageurl: 'picture/download.jpg'




    }];
    $scope.addPost = function() {
      
      $scope.records.push($scope.record);
      this.record = {};
    }

    $scope.closeModal = function(){
      $scope.$modalInstance.close();
     }
  }]);
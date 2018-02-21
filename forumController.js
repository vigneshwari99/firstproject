var forumModule  = angular.module('forumModule',[]);
app.controller("forumController",['$scope',function($scope){
    console.log('sucess');
    this.review = {};
    this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
    }
}]);
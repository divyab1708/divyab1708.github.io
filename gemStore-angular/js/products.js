(function(){
   var app=angular.module("storeProducts",[]);
   
app.controller("StoreController",function(){
               this.products= gems;
});

 

 app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn=Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

 app.directive("productDescription",function(){
    return {
      restrict:"E",
      templateUrl: "product-description.html"
    };
  });

 app.directive("productSpecs",function(){
    return {
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
  });

 app.directive('productTabs',function(){
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function(){
        this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
        
      },
      controllerAs: "tabCtrl"
      
    };
  });

  app.directive("productGallery",function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  },
      controllerAs: 'gallery'
    };
  });


   
})()
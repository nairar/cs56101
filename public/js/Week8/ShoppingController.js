shoppingApp.controller("ShoppingController", ["$scope", "$http", "ShoppingCartService", function($scope, $http, ShoppingCartService) {

	$scope.renderInClient = function(data) {
		$scope.photos = [];
		console.log("Entered");
		
		console.log(JSON.stringify(data));
		for(var i=0; i<data.photos.photo.length; i++){
                var photo = data.photos.photo[i];
                
            // use the various elements of the json object to build the link

                var details_url = "https://farm" +photo.farm+ ".staticflickr.com/" +photo.server+ "/" +photo.id+ "_" +photo.secret+ ".jpg";
                var owner_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
                var pic = {
                	photo : details_url,
                	desc : photo.title.split(',')[0]
                };
                $scope.photos[i] = pic;
                
        }
        
		//$scope.products = res.products;
	}

	$scope.all = function() {
		console.log("Entered scope.all");
		ShoppingCartService.getProducts ($scope.renderInClient);

	}

	$scope.all();

}]);


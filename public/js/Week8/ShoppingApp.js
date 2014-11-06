var shoppingApp = angular.module("ShoppingApp",[]);

shoppingApp.factory("ShoppingCartService", function ($http) {
	var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0bcb83ff690fc97e1d42f6e6c8d2a89e&tags=pottery&per_page=10&format=json&nojsoncallback=?";
	var getProducts = function(callback) {
		 $http.post(url).success(callback);
	} 

	return {
		"getProducts" : getProducts
	}
});
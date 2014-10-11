var app = angular.module('App',[]);

/*app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when ('/employees', {
		templateUrl: './public/views/index.html',
		controller: 'TableController'
	});
}]);
*/
app.factory("AppService", function ($http) {
	var url = "/employees/data";
	var create = function(employee, callback) {
		 $http.post(url, employee).success(callback);
	} 

	var selectOne = function (empId, callback) {
		$http.get('/employees/'+empId).success(callback);
	}

	var selectAll = function(callback) {
		$http.get(url).success(callback);
	}

	var remove = function (id, callback) {
		$http.delete('/employees/'+id).success(callback);
	}	

	var update  = function (id, employee, callback) {
		$http.put ('/employees/'+id, employee).success(callback);
	}

	return {
		"create" : create,
		"selectOne": selectOne,
		"selectAll": selectAll,
		"remove": remove,
		"update": update

	}
});
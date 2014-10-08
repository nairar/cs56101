
app.controller("TableController", function($scope, $http) {
    var url = '/employees/data';
    $scope.renderClient = function(res) {
        console.log("Employees are " + res.employees);
        $scope.employees = res.employees;
        
    }

   $scope.add = function (employee) {
     $http.post(url, employee).success(function (res, err) {
        if (err) console.log(err);
        $scope.employees = res.employees;
    });
   }

   $scope.update = function() {
    $http.put ('/employees/'+$scope.newEmployee._id, $scope.newEmployee).success(function (res) {
        if (err) console.log (err);
        $scope.all();
    });
   }

   $scope.select = function(employee) {
        $scope.newEmployee = employee;
   }

    $scope.all = function() {
        $http.get(url).success($scope.renderClient);
    }
    
    $scope.all();
});


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
        $scope.newEmployee = res;
    });
   }

   $scope.select = function(employee) {
        $scope.newEmployee = employee;
   }

   $scope.delete = function (id) {
    $http.delete('/employees/'+id).success(function (req, res) {
        $scope.all();
    });
   }

    $scope.all = function() {
        $http.get(url).success($scope.renderClient);
    }
    
    $scope.all();
});


app.controller("TableController", ["$scope", "$http", "AppService", function($scope, $http, AppService) {
    var url = '/employees/data';
    $scope.renderClient = function(res) {
        console.log("Employees are " + res.employees);
        $scope.employees = res.employees;
        
    }

   $scope.add = function (employee) {
     AppService.create(employee, $scope.all);
   }

   $scope.update = function() {
    
    AppService.update($scope.newEmployee._id, $scope.newEmployee, $scope.all);

   }

   $scope.select = function(employee) {
        /*$scope.newEmployee = employee;*/
        AppService.selectOne(employee._id, function (res) {
            console.log(res.employee[0].name);
            $scope.newEmployee = res.employee[0];
        });
   }

   $scope.delete = function (id) {
        AppService.remove(id, $scope.all);
   }

    $scope.all = function() {
        /*$http.get(url).success($scope.renderClient);*/
        AppService.selectAll($scope.renderClient);
    }
    
    $scope.all();
}]);

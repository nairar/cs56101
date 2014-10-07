
function TableController($scope, $http) {
    var url = '/employees'
    $http.get(url).success(function (res, err) {
        if (err) console.log(err);
        console.log("Employees are " + res.employees);
        if (res.employee != undefined) {
            
            $scope.employees = res.employees;
        } else {
            $scope.employees = [];
        }
        
    });

   

};

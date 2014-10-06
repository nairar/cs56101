
function TableController($scope, $http) {
    var url = '/employees'
    $http.get(url).success(function (res, err) {
        $scope.employees = res;
    });


};

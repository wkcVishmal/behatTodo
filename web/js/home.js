//Angular Application for get data from "http://localhost:8000/listdata" API and set them to scope variable

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

    $http.get("http://localhost:8000/listdata")
        .then(function(response) {
            $scope.items = response.data;
            angular.forEach($scope.data, function(value, key){
                if(value.Password == "thomasTheKing")
                    console.log("username is thomas");
            });

        }, function(response) {
            $scope.items = "Something went wrong";
        });

    $scope.all = function () {
        $http.get("http://localhost:8000/listdata")
            .then(function(response) {
                $scope.items = response.data;
                angular.forEach($scope.data, function(value, key){
                    if(value.Password == "thomasTheKing")
                        console.log("username is thomas");
                });

            }, function(response) {
                $scope.items = "Something went wrong";
            });
    }

    $scope.getDone = function () {
        $http.get("http://localhost:8000/donedata")
            .then(function(response) {
                $scope.items = response.data;
                angular.forEach($scope.data, function(value, key){
                    if(value.Password == "thomasTheKing")
                        console.log("username is thomas");
                });

            }, function(response) {
                $scope.items = "Something went wrong";
            });
    }

    $scope.todo = function () {
        $http.get("http://localhost:8000/tododata")
            .then(function(response) {
                $scope.items = response.data;
                angular.forEach($scope.data, function(value, key){
                    if(value.Password == "thomasTheKing")
                        console.log("username is thomas");
                });

            }, function(response) {
                $scope.items = "Something went wrong";
            });
    }


    $scope.add = function(con) {
        $scope.data = angular.copy(con);

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('http://localhost:8000/saveItem', $scope.data, config)
            .success(function (data, status, headers, config) {
                $http.get("http://localhost:8000/listdata")
                    .then(function(response) {
                        $scope.items = response.data;
                    }, function(response) {
                        $scope.items = "Something went wrong";
                    });
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });

    };


    $scope.data = {};
    $scope.delete = function (id) {
        $scope.id = id;
        $scope.data = {
            "id": $scope.id
        };

        var url = 'http://localhost:8000/delete/'+$scope.id;
        var x;
        if (confirm('Are you sure?\nDo you want to delete this Item?\n Item id : '+$scope.id) == true) {
            $http.delete(url)
                .success(function (data, status, headers, config) {
                    $http.get("http://localhost:8000/listdata")
                        .then(function(response) {
                            $scope.items = response.data;
                        }, function(response) {
                            $scope.items = "Something went wrong";
                        });
                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
                });
        } else {
            x = "You pressed Cancel!";
        }
    };


    $scope.data = {};
    $scope.done = function (id) {
        $scope.id = id;
        $scope.data = {
            "id": $scope.id
        };

        $http.patch('http://localhost:8000/setDone', $scope.data)
            .success(function (data, status, headers, config) {
                $http.get("http://localhost:8000/listdata")
                    .then(function(response) {
                        $scope.items = response.data;
                    }, function(response) {
                        $scope.items = "Something went wrong";
                    });
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

    $scope.con = {};
    $scope.con.priority = "2";

    $scope.con.countries = [{
        id: "1",
        name: "High"
    }, {
        id: "2",
        name: "Normal"
    }, {
        id: "3",
        name: "Low"
    }];



});

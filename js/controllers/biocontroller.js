angular.module('myApp', ['data'])
    .controller('biocontroller', ['$scope', 'bio', function ($scope, $bio) {
        $scope.name = $bio.name;
    }]);
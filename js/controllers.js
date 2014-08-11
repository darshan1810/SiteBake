angular.module('myApp.controllers', ['myApp.data'])
    .controller('biocontroller', ['$scope', 'bio',
        function ($scope, $bio) {
            $scope.bio = $bio;
    }])
    .controller('navbarcontroller', ['$scope', 'bio',
        function ($scope, $bio) {
            $scope.name = $bio.name;
            if ($bio.resumelink || $bio.default_email) {
                $scope.showRightNav = true;
            } else {
                $scope.showRightNav = false;
            }
            $scope.resumelink = $bio.resumelink;
            $scope.default_email = "mailto:" + $bio.default_email;
            if ($bio.default_email) $scope.hasDefaultEmail = true;
            else $scope.hasDefaultEmail = false;
    }])
    .controller('educationcontroller', ['$scope', 'education',
        function ($scope, $education) {
            $scope.education = $education;
        }])
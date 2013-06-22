/**
 * @author Harshal
 */
(function( ng, app ){
    "use strict";
    app.factory(
        "LoginData",
        function($http) {
            return {
                read: function(jsonURL, scope) {
                    $http.get(jsonURL).success(function (data, status) {
                        scope.data = data;
                    });
            }};
        }
    );

})( angular, Demo );

(function( ng, app ){
    "use strict";
    app.controller(
        "home.login",
        function( $scope, requestContext, _ , LoginData) {
            LoginData.read('assets/app/json/users.json', $scope);
            
            $scope.hasUser = false;
            $scope.auth = false;
            // Check the username/password from model
            $scope.checkUsername = function() {
                for (var x = 0; x < $scope.data.count; x++) {
                    var user = $scope.data.items[x];
                    if ($scope.inputUsername == user.username) {
                        $scope.hasUser = true;
                        if ($scope.inputPassword == user.password) {
                            $scope.auth = true;
                            break;
                        }
                    }
                }
                // Show the message when based on authentication of username/password
                if (!$scope.hasUser) {
                    $scope.alertMessage = "Username does not exist";
                } else if (!$scope.auth) {
                    $scope.alertMessage = "Invaid password.";
                } else {
                    $scope.alertMessage = "";
                }
            }; 

        }
    );

})( angular, Demo );
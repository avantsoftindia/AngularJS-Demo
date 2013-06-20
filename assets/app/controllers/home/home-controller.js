(function( ng, app ){

	"use strict";

	app.controller(
		"home.HomeController",
		function( $scope, requestContext, _ ) {


			// --- Define Controller Methods. ------------------- //


			// ...


			// --- Define Scope Methods. ------------------------ //


			// ...


			// --- Define Controller Variables. ----------------- //


			// Get the render context local to this controller (and relevant params).
			var renderContext = requestContext.getRenderContext( "splash.home" )

			
			// --- Define Scope Variables. ---------------------- //


			// The subview indicates which view is going to be rendered on the page.
			$scope.subview = renderContext.getNextSection();


			// --- Bind To Scope Events. ------------------------ //


			// I handle changes to the request context.
			$scope.$on(
				"requestContextChanged",
				function() {

					// Make sure this change is relevant to this controller.
					if ( ! renderContext.isChangeRelevant() ) {

						return;

					}

					// Update the view that is being rendered.
					$scope.subview = renderContext.getNextSection();

				}
			);


			// --- Initialize. ---------------------------------- //


			$scope.setWindowTitle( "Login Page" );
			
			$scope.items = [
				{title: 'Username', value: 'Harshal'},
				{title: 'Password', value: 'php'}
			];
			
			
			/*$scope.login = function(index) {
				$scope.items[0].title;
				alert("LOGGED in successfully ")
			}
			
			$scope.signup = function(index) {
				$scope.items[0].title;
				alert("Does not exist. Please sign up.")
			}*/


		}
	);

})( angular, Demo );
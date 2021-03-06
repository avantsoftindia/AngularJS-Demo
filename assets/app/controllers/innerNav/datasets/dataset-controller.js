(function( ng, app ){

	"use strict";

	app.factory(
		"JsonDataset",
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
		"innerNav.datasets.DatasetController",
		function( $scope, requestContext, _ , JsonDataset ) {


			// --- Define Controller Methods. ------------------- //


			// ...


			// --- Define Scope Methods. ------------------------ //


			// ...


			// --- Define Controller Variables. ----------------- //


			// Get the render context local to this controller (and relevant params).
			var renderContext = requestContext.getRenderContext( "application.datasets" )

			
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


			$scope.setWindowTitle( "Datasets" );
			
			JsonDataset.read('assets/app/json/datasets.json', $scope);
			
			
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
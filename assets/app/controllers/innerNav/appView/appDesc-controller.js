(function( ng, app ){

	"use strict";

	app.factory(
		"JsonApplication",
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
		"innerNav.appView.AppDescController",
		function( $scope, requestContext, _ , JsonApplication) {


			// --- Define Controller Methods. ------------------- //


			// ...


			// --- Define Scope Methods. ------------------------ //


			// ...


			// --- Define Controller Variables. ----------------- //


			// Get the render context local to this controller (and relevant params).
			var renderContext = requestContext.getRenderContext( "application.appview" );

			
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


			$scope.setWindowTitle( "HomePage" );
			
			JsonApplication.read('assets/app/json/application.json', $scope);


		}
	);

})( angular, Demo );
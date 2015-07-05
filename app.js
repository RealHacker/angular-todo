angular.module("todo", ["ngRoute"]);

angular.module("todo").config(configureRoutes);

configureRoutes.$inject = ["$routeProvider"]
function configureRoutes($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "partials/list.html",
			controller: "listController",
			controllerAs: "vm"
		}).
		when("/edit", {
			templateUrl: "partials/edit.html",
			controller: "editController",
			controllerAs: "vm"
		}).
		otherwise({
			redirectTo: "/"
		});
	console.log("In controller")
}
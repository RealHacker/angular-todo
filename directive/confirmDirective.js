angular.module("todo").
	directive("myConfirm", myConfirmDirective)

function myConfirmDirective(){
	return {
		restrict: "EA",
		templateUrl: "partials/confirm.html",
		scope: {
			doConfirm: "&confirm",
			doCancel: "&cancel"
		},
		transclude: true
	}
}
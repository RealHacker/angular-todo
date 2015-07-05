angular.module("todo").controller("listController", listController)

listController.$inject = ["dataService", "$location"]

function listController(dataService, $location){
	console.log("In list controller")
	this.list = dataService.getData()
	this.removeItem = function(item){
		this.list.splice(item, 1)
	}
	this.gotoEditor = function(){
		$location.path("/edit");
	}
}
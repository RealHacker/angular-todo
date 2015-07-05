angular.module("todo").
	controller("editController", editController)

editController.$inject = ["dataService", "$location"]

function editController(dataService, $location){
	var vm = this;
	this.submitItem = function(){
		dataService.addData({
			title: vm.title,
			description: vm.description,
			time: vm.time
		});
		$location.path("/")
	}
	console.log("In edit controller")
}
angular.module("todo").controller("listController", listController)

listController.$inject = ["dataService", "$location"]

function listController(dataService, $location){
	console.log("In list controller")
	var vm = this;

	vm.list = dataService.getData();
	vm.showConfirm = false;
    
	this.removeItem = function(){
		vm.showConfirm = false;
		vm.list.splice(vm.currentIndex, 1)
	}
	this.cancelConfirm = function(){
		vm.showConfirm = false;
	}
	this.revealConfirm = function(idx){
		vm.currentIndex = idx;
		vm.showConfirm = true;
	}
	this.gotoEditor = function(){
		$location.path("/edit");
	}
}
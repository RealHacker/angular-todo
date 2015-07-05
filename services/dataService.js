angular.module("todo").service("dataService", dataService)

function dataService(){
	console.log("In controller")
	this.data = [
		{
			title: "buy some milk",
			description: "Need to drink milk to stay strong",
			time: "9:00"
		},
		{
			title: "attend to the plant",
			description: "Poor thing needs water",
			time: "10:00"
		},
	];
	this.getData = function(){
		return this.data;
	}
	this.addData = function(newData){
		this.data.push(newData);
	}
}
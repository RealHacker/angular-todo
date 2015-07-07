angular.module("todo").
	filter("ampm", ampmFilter)

function ampmFilter(){
	return function(input){
		var hour = parseInt(input.slice(0,2))
		if(hour>12){
			input = input +"PM"
		}else{
			input = input+"AM"	
		}
		return input
	}
}
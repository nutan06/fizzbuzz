$(document).ready(function(){
	for (var i=1; i<100; i++){
		if(i%3===0 && i%5===0){
			//console.log("Fizz Buzz");
			$('.content').append('<li>Fizz Buzz</li>');
		}
		else if(i%5===0){
			//console.log("Buzz");
			$('.content').append('<li>Buzz</li>');
		}
		else if(i%3===0){
			//console.log("Fizz");
			$('.content').append('<li>Fizz </li>');
		}
		else {
			$('.content').append('<li>'+i+'</li>');
		}
	}
});
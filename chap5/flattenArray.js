/*
Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the input
arrays.
*/

"use strict";
(function(){
	var arr = ["we","asdf",["aa","bb"]];
	var merged = arr.reduce(function(a,b){
		return a.concat(b);
	},[]);
	console.log(merged);
	
})();


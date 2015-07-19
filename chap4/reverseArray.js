/*
Reversing an Array
Arrays have a method reverse , which changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array
as an argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace , does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situa-
tions? Which one is more efficient?
*/

"use strict";

function reverseArray(arg){
	var reversed = [];
	for(var i = 0; i< arg.length; i++)
	{
		reversed.push(arg[arg.length-1-i]);
	}
	return reversed;
}

function reverseArrayInPlace(arr){
	for (var i = 0; i < Math.floor(arr.length/2); i++) {
	      var temp = arr[i];
	      arr[i] = arr[(arr.length - 1) - i]
	      arr[(arr.length - 1) - i] = temp;
	}
}

reverseArray([2,6,9,4,3]);

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

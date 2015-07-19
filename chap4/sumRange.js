/*
The Sum of a Range
The introduction of this book alluded to the following as a nice way to com-
pute the sum of a range of numbers:
console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end , and
returns an array containing all the numbers from start up to (and includ-
ing) end .
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the previous program and see whether it does
indeed return 55.
As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the array. If
no step is given, the array elements go up by increments of one, correspond-
ing to the old behavior. The function call range(1, 10, 2) should return
[1, 3, 5, 7, 9] . Make sure it also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2] .
*/

"use strict";

function range(start,end)
{
	var step;
	arguments.length > 2? step = arguments[2]: step = 1;
	
	var numbers = [];
	
	if(start > end)
	{
		for(var i=start;i >= end;i += step)
		{
			numbers.push(i);
		}	
		
		return numbers;
	}
	
	for(var i=start;i<=end;i += step)
	{
		numbers.push(i);
	}	
	
	
	return numbers;
}

function sum(numbers)
{
	function add(prev,cur){
		return prev + cur;
	}
	return numbers.reduce(add);
}


console.log(sum(range(5,2,-1)));

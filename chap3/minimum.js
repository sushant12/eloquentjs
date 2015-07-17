/*
Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min
that takes two arguments and returns their minimum.
*/

"use strict";
var min = function minimum(arg1,arg2)
{
	return arg1 > arg2? console.log(arg2): console.log(arg1);
}

min(2,1);

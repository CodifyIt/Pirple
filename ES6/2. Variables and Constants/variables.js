/*
	`const`
	This keyword is used to declare constant variables that we 
	don't want to change at all after definition.
	It can be used to declare variables that store mathematical
	constants such as PI.
	We don't want the value of PI to be changed in the entire 
	program, therefore we will make it a constant.
*/

function Const(){
	const PI = 3.1415;

	let requiredDimension = "area"
	let radius = 5;
	if(requiredDimension === "area"){
		// Printing the area
		console.log(PI*r*r);
	}
	else{
		// Printing the circumference
		console.log(2*PI*r);
	}
}

/*
	`let`
	This keyword is used to limit the scope of a variable within the scope
	in which it was declared.
	It resitricts any access to the variable outside the scope in which it 
	was declared.
	It can be used to create variables only when we need, if we need to 
	calculate the area of a circle we calculate PI*r*r so we need radius,
	but if we want to calculate the area of a rectangle, we need the 
	length and the breadth.
	We want to have radius if an only if figure is a circle and length and
	breadth if and only if we have a rectangle.
*/

function Let(){
	let figure = "circle";
	let area;

	if(figure === "circle"){
		let radius = 5;
		area = Math.PI * radius * radius;
	}
	else{
		let length = 5;
		let breadth = 4;

		area = length*breadth;
	}

	console.log("Area of " + figure + " is: " + area);

}

/*
	`var`
	This keyword is used to declare a variable whose scope in a fucntion extends
	to all the sub-scopes.
	The variable declared with `var` can be accessed anywhere in the function no
	matter what the scope is defined within the fuction.

	We can use it to find area of a figure and access it outside the sscope.
*/

function Var(){
	var figure = "rectangle";

	if(figure === "circle"){
		var radius = 5;		
		var area = Math.PI*radius*radius;
	}
	else{
		var length = 5;
		var breadth = 5;
		var area = length*breadth;
	}

	console.log("Area of " + figure + " is: " + area);
}

Const(); Let(); Var();

/*
	Hoisting
	Hoisiting is the activity of raising things up. Like National Flag Hoisting.

	Hoisting in Javascript
	All the variables declared with `var` within a scope are hoisted to the top
	of the function no matter where they were declared and what their scope was.
*/
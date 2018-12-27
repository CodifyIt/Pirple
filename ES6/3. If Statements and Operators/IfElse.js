// Socrates
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

let Socrates = new Person("Socrates", "Male");

if(Socrates.gender == "Male"){
	Socrates.category = "men";
}
else{
	Socrates.category = "men";	
}

if(Socrates.category == "men" ){
	Socrates.mortality = "mortal";
}
else{
	Socrates.mortality = "Not mortal";	
}

console.log(Socrates.mortality);

// Cake

let cake = "";

if(cake !== "chocolate"){
	cake = "vanilla";
}

console.log("The cake is " + cake);
//Socrates
const isMortal = function(name){
	const mortalMen = ["Thisman", "Thatman", "Noman", "Socrates"];
	for(let i in mortalMen){
		if(mortalMen[i] === name) return true;
	}
	return false;
}

const name = "Socrates";
console.log(name + (isMortal(name)?" is ":" is not ") + "mortal");

// Cakes
const flavor = function(cakes, isChocolate){
	if(!isChocolate) return "Vanilla";
	return "Chocolate";
}

const cakes = ["Vanilla", "Chocolate"];
console.log(flavor(cakes, false));
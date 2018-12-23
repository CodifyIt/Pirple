// base to create every song object

const GENRES = {
	1:"Pop",
	2: "Rock",
	3: "Country",
	4: "Jazz",
	5: "Blues",
	6: "Rap",
	7: "R&B",
	8: "Metal",
	9: "Alternate"
}

function Song(name, artist, label, year, genre, duration, lyricist, favourite){
	// Assigning values to the properties
	this.name = name;
	this.artist = artist;
	this.label = label;
	this.year = year;
	this.genre = GENRES[genre];
	this.duration = duration;
	this.lyricist = lyricist;
	this.favourite = favourite;

	// function to display properties
	this.display =  function(){
		console.log("Name : " + this.name);
		console.log("Artist : " + this.artist);
		console.log("Label : " + (Boolean(this.label)?this.label:"No Information"));
		console.log("Year : " + this.year);
		console.log("Genre : " + this.genre);
		console.log("Duration : " + this.duration + " seconds");
		console.log("Lyricists : " + (Boolean(this.lyricist.length)?this.lyricist.join(","):"No Information"));
		console.log("Favourite : " + (favourite?"Yes":"No"));
	}
}

/*
	Creating song objects.
	By calling the constructor function.
*/
var YoureBeautiful = new Song("You're Beautiful", "James Blunt", null, 2004, 1, 202, ["Amanda Ghost", "Sacha Skarbek", "James Blunt"], true);
var IamYours = new Song("I'm Yours", "Jason Mraz", "Atlantic", 2008, 1, 221, ["Jason Mraz"], true);
var NothingElseMatters = new Song("Nothing Else Matters", "Metallica", "Elektra", 1992, 8, 388, ["James Hetfield", "Lars Ulrich"], true);

YoureBeautiful.display();
IamYours.display();
NothingElseMatters.display();
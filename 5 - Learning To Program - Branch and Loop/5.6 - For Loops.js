var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

var roll = getDieRoll(6);

for(var i = 0; i < roll; i++) {
	console.log("*");
	roll = getDieRoll(6);
}

if(roll >= 3 && roll <= 5) {
	console.log("Great roll!");
} else if (roll == 1) {
	console.log("Terrible roll");
} else {
	console.log("That was an ok roll");
}

console.log("You rolled a " + roll);
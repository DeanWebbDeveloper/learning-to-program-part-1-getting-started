var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

var roll = getDieRoll(6);

if(!(roll ==1 || roll == 6)) {
	console.log("Great roll!");
}

console.log("You rolled a " + roll);
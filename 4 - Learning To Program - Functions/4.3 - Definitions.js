var getDieRoll = function() {
	console.log("rolling a die");
	return Math.ceil(6 * Math.random());
};

var firstDie = getDieRoll();
console.log(firstDie);

var secondDie = getDieRoll();
console.log(secondDie);

console.log(firstDie + secondDie);
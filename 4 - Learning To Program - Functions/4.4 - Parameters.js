var getDieRoll = function(dieSize) {
	console.log(dieSize);
	return Math.ceil(dieSize * Math.random());	
};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(20);

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);
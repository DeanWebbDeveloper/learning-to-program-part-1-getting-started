var die = {
	size: 4,
	count: 1,
	roll: function (dieSize) {
		var result = Math.ceil(dieSize * Math.random());
		return result;
	}
};

console.log(die);
console.log(die.size);

die.size = 10;

console.log(die.size);
console.log(die.roll(6));
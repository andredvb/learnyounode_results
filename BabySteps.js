/*BabySteps*/
var myArgs = process.argv.slice(2);
var sum = 0;
for (var i = 0; i < myArgs.length; i++) {
	sum += +myArgs[i];
};
console.log(sum);
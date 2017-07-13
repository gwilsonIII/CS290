function sumArray(arr) 
{
	var sum = 0;
	arr.forEach(function (x)
	{
		sum += x;
	});
	return sum;
}

function dialog(name)
{
	return function(words)
	{
		return name + " says \"" + words + "\"";
	}
}

testArr = [1,2,3];
console.log(sumArray(testArr));

var Donald = { name: "Donald Duck"};
Donald.speak = dialog("Donald Duck");
console.log(Donald.speak("Hello there"));
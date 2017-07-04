function deepEqual(a,b){
	//check if a and b are non-null objects
	if((typeof(a) == "object" && a != null) && (typeof(b) == "object" && b != null)){
		//check for equal number of properties, avoids recursively comparing properties twice
		if(Object.keys(a).length != Object.keys(b).length){
			//if different lengths, must be false
			return false;
		}
		//compares each property of the objects
		for(var p in a) {
			if(b.hasOwnProperty(p)){
				if(deepEqual(a[p],b[p]) === false){
					//identical properties have different values
					return false;
				}
			}
			else{
				//found a property in a, not in b
				return false;
			}
		}
		//identical properties all with matching values
		return true;
	}
	else if(a !== b){
		//non-objects are not equal
		return false;
	}
	else{
		//non-objects are equal
		return true;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
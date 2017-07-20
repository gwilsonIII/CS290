//Name: Gerald Wilson
//Date: 7/16/2017
//This program sorts arrays of automobiles based on either the automobile's type, make, or year.
//Credit to stack overflow discussion for idea to add a logMe function to the automobile prototype to aid in printing to console



function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    
	do 
	{
      var sorted = true;
      for (var i = 0; i < array.length - 1; i++) 
	  {
         if (comparator(array[i], array[i + 1])) 
		 {
            var hold = array[i];
            array[i] = array[i + 1];
            array[i + 1] = hold;
            sorted = false;
         }
      }
    } while (sorted === false);
    
    return array;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
	if (auto1.year > auto2.year)
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
	if (auto1.make.toLowerCase() > auto2.make.toLowerCase())
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    /* your code here*/
	var type1;
	var type2;
	
	//assign value to the auto1's type for comparing
	if (auto1.type.toLowerCase == "roadster")
	{
        type1 = 5;
    } 
	else if (auto1.type.toLowerCase == "pickup") 
	{
        type1 = 4;
	} 
	else if (auto1.type.toLowerCase == "suv") 
	{
		type1 = 3;
    } 
	else if (auto1.type.toLowerCase == "wagon") 
	{
        type1 = 2;
    } 
	else 
	{
        type1 = 1;
    }
	
	//assign value to the auto2's type for comparing
	if (auto2.type.toLowerCase == "roadster")
	{
        type2 = 5;
    } 
	else if (auto2.type.toLowerCase == "pickup") 
	{
        type2 = 4;
	} 
	else if (auto2.type.toLowerCase == "suv") 
	{
		type2 = 3;
    } 
	else if (auto2.type.toLowerCase == "wagon") 
	{
        type2 = 2;
    } 
	else 
	{
        type2 = 1;
    }
	
	
	if (type1 > type2)
	{
		return true;
	}
	else
	{
		return false;
	}
}


//add a logMe funtion to the Automobile prototype. Idea borrowed from stack overflow
Automobile.prototype.logMe = function()
{
    console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
}

//Prints given array of cars, one car per line, with all car info
function printArr(array)
{
	 array.forEach(function(x)
    {
       x.logMe();
    })
}

console.log('*****');
console.log('The cars sorted by year are:');
printArr(sortArr(yearComparator, automobiles));

console.log('\nThe cars sorted by make are:');
printArr(sortArr(makeComparator, automobiles));

console.log('\nThe cars sorted by type are:');
printArr(sortArr(typeComparator, automobiles));
console.log('*****');


/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */
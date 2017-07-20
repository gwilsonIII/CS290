/* Gerald Wilson */
/* 7/23/2017 */
/* CS290 DOM and Events HW */


//make the specified table
var tblHeight = 3;
var tblWidth = 4; 
function makeTable() {
	var table = document.createElement("table");
	
	var headerRow = document.createElement("tr");
	for (i=1; i < tblWidth + 1; i++){
		var headerCell = document.createElement("th")
		headerCell.textContent = "Header" + i;
		headerCell.style.border = "2px solid";
		headerRow.appendChild(headerCell);
	}
	table.appendChild(headerRow);
	
	var tBody = document.createElement("tbody");
	for (i=1; i < tblHeight + 1; i++) {
		var bodyRow = document.createElement("tr");
		for (j=1; j < tblWidth + 1; j++) {
			var bodyCell = document.createElement("td")
			bodyCell.textContent = i + ", " + j;
			bodyCell.style.border = "1px solid";
			bodyRow.appendChild(bodyCell);
		}
		tBody.appendChild(bodyRow);
	}
	table.appendChild(tBody);
	return table;
}
document.body.appendChild(makeTable());

//Button elements contained within a div
var movButtons = document.createElement("div");
var upButton = document.createElement("button");
upButton.textContent = " Up ";
var downButton = document.createElement("button");
downButton.textContent = "Down";
var leftButton = document.createElement("button");
leftButton.textContent = "Left";
var rightButton = document.createElement("button");
rightButton.textContent = "Right";
var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";

//Sets style of buttons
movButtons.appendChild(upButton);
upButton.style.position = "absolute";
upButton.style.width = "50px";
upButton.style.height = "20px";
upButton.style.marginLeft = "50px";
upButton.style.marginTop = "5px";

movButtons.appendChild(downButton);
downButton.style.position = "absolute";
downButton.style.width = "50px";
downButton.style.height = "20px";
downButton.style.marginLeft = "50px";
downButton.style.marginTop = "25px";

movButtons.appendChild(leftButton);
leftButton.style.position = "absolute";
leftButton.style.width = "50px";
leftButton.style.height = "20px";
leftButton.style.marginTop = "25px";

movButtons.appendChild(rightButton);
rightButton.style.position = "absolute";
rightButton.style.width = "50px";
rightButton.style.height = "20px";
rightButton.style.marginLeft = "100px";
rightButton.style.marginTop = "25px";

movButtons.appendChild(markButton);
markButton.style.position = "absolute";
markButton.style.marginTop = "55px";
markButton.style.height = "30px";
markButton.style.width = "80px";
markButton.style.marginLeft = "35px";

document.body.appendChild(movButtons);
//End of button styling


//Variables for button event functions
var rowNum = 1
var cellNum = 0;
var table = document.body.getElementsByTagName("table")[0];
var curRow = table.getElementsByTagName("tr")[rowNum];
var curCell = curRow.getElementsByTagName("td")[cellNum];
curCell.style.border = "3px solid";

//Button functions
function moveUp() {
	if (curRow.previousSibling != null)
	{
		curCell.style.border = "1px solid";
		curRow = curRow.previousSibling;
		curCell = curRow.getElementsByTagName("td")[cellNum];
		curCell.style.border = "3px solid";
		rowNum--;
	}else{
		curCell.style.border = "3px solid";
	}
}

function moveDown() {
	if (curRow.nextSibling != null)
	{
		curCell.style.border = "1px solid";
		curRow = curRow.nextSibling;
		curCell = curRow.getElementsByTagName("td")[cellNum];
		curCell.style.border = "3px solid";
		rowNum++
	}else{
		curCell.style.border = "3px solid";
	}
}

function moveLeft() {
	if (curCell.previousSibling != null)
	{
		curCell.style.border = "1px solid";
		curCell = curCell.previousSibling;
		cellNum--;
		curCell.style.border = "3px solid";
	}else{
		curCell.style.border = "3px solid";
	}
}

function moveRight() {
	if (curCell.nextSibling != null)
	{
		curCell.style.border = "1px solid";
		curCell = curCell.nextSibling;
		cellNum++;
		curCell.style.border = "3px solid";
	}else{
		curCell.style.border = "3px solid";
	}
}

function markCell() {
	curCell.style.backgroundColor = "yellow";
}
		
//Button events
upButton.addEventListener("click", moveUp);
downButton.addEventListener("click", moveDown);
leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);
markButton.addEventListener("click", markCell);









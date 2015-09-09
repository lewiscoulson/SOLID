// Open Closed Principle (OCP)

// Each code entity should be open for extension but closed for modification.
// New behaviour should be able to be added without modifying existing code.
// OCP is best implemented using the strategy design pattern.

// Example violating the OCP
function SwissArmyKnife() {
	this.color = 'red';
}

// Example utilising the OCP
function SwissArmyKnife() {
	this.color = '';
}

SwissArmyKnife.prototype.getColor = function() {
	console.log(this.color);
}

SwissArmyKnife.prototype.setColor = function(color) {
	this.color = color;
}

function Red() {
	this.color = 'red';
}

function Green() {
	this.color = 'green';
}

function Blue() {
	this.color = 'blue';
}

var swissArmyKnife = new SwissArmyKnife();

var red = new Red();
var green = new Green();
var blue = new Blue();

swissArmyKnife.setColor(red);
swissArmyKnife.getColor();

swissArmyKnife.setColor(green);
swissArmyKnife.getColor();

swissArmyKnife.setColor(blue);
swissArmyKnife.getColor();

// The first example requires the developer to change the color inside the constructor and hence modify existing code.
// The second example, although more code is required, we can now safely switch out different behaviours and properties of a object.

// Benefits - flexibility, reusability, maintainability
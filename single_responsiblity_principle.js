// Single Responsibility Principle (SRP)

// Each unit of code should be responsible for just one task.
// If a unit has multiple responsibilities, it will have multiple reasons to change.
// Ideally a single change should affect as few other modules as possible.
// Many smaller classes tend to result in a more flexible design.

// Each class should have just one reason to change!.

// Example violating the SRP
function SwissArmyKnife() {
	function knife() {
		console.log('knife');
	}

	function screw() {
		console.log('screw');
	}

	function saw() {
		console.log('saw');
	}

	return {
		knife: knife,
		screw: screw,
		saw: saw
	}
}

// Example utilising the SRP
function Knife() {
	console.log('knife');
}

function Screw() {
	console.log('screw');
}

function Saw() {
	console.log('saw');
}

// The first example has three responsibilites and hence three reasons to change.
// The second example usese three seperate constructors each with just one 
// responsibility and one reason to change.

// Benefits - clarity of intention, higher cohesion, easier to reuse, easier to test.

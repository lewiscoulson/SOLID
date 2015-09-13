// Inteface Segregation Principle (ISP)

// Clients should be be forced to depend on methods they do not use.
// Prefer smaller focused intefaces than large unrelated ones.
// Violation of this principle results in classes that depend on methods they don't need
// which increases coupling and makes maintainence more costly.

// Example violating ISP
var validation = function() {
	// Number based validation methods
	function isNumber() {

	}

	function isPhoneNumber() {

	}

	function isAge() {

	}

	// Text based validation methods
	function isText() {
		
	}

	function isName() {
		
	}

	function isAddress() {
		
	}


	return {
		isNumber: isNumber,
		isPhoneNumber: isPhoneNumber,
		isAge: isAge,
		isText: isText,
		isName: isName,
		isAddress: isAddress
	};
}

// Example utilising ISP
var validation = function() {
	// Number based validation methods
	function isNumber() {

	}

	function isPhoneNumber() {

	}

	function isAge() {

	}

	// Text based validation methods
	function isText() {
		
	}

	function isName() {
		
	}

	function isAddress() {
		
	}

	return {
		number: {
			isNumber: isNumber,
			isPhoneNumber: isPhoneNumber,
			isAge: isAge
		},
		text: {
			isText: isText,
			isName: isName,
			isAddress: isAddress
		}
	};
}

// The first example returns all validation methods, so any client using this object will get validation
// methods they don't need.
// The second example improves this issue by breaking the methods into logical groupings so the client will
// only use relevant methods.

// Cohesion, easier to maintain, flexibility
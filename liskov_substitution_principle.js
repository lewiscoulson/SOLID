// Liskov Substitution Principle (LSP)

// Objects in a program should be replaceable with instances of their subtypes without altering 
// the correctness of that program.
// Replace IS_A relationships with IS_SUBSTITUTABLE-FOR
// i.e. a toy duck is_a duck, but a toy duck isn't susbtitutable with a duck
// Prefer composition over inheritance.

// Example violating LSP
class Rectangle {
	constructor {
		this.width = 5;
		this.height: = 10;
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor {
		super({
			width = 5;
			height: = 5;
		});
	}

	getArea() {
		return this.width * this.width;
	}
}

// Example using LSP
class RectangularShape {
	constructor {
		this.width = 5;
		this.height: = 10;
	}
}

class Rectangle extends RectangularShape {
	constructor {
		super({
			width = 15;
			height: = 25;
		});
	}

	getArea() {
		return this.width * this.height;
	}
}

class Square extends RectangularShape {
	constructor {
		super({
			width = 10;
			height: = 10;
		});
	}

	getArea() {
		return this.width * this.width;
	}
}

// The first example assumes all rectangles use an interchangable area calculation and hence 
// square is not replaceable with rectangle.
// The second example overcomes this issue by changing the abstraction which doesn't make assumptions
// about the calculation method.

// Benefits - polymorphism, maintainability, flexibility 

// Dependency Inversion Principle (DIP)

// Dependencies should be abstracted into interfaces so that the implementation details can be easily replaced.
// Ensure the application core is decoupled from lower level modules.

// Example violating DIP
$.get("data.html", function( data ) {
  $( ".something" ).html( data );
});

// Example utilising DIP
function getFileFromServer(url, selector) {
	$.get(url, function( data ) {
	  $(selector.html( data );
	});
}

// The first example gets data from the server using a jquery implementation and so is tightly coupled
// with that particular version of jquery.
// The second example wraps this implementation inside an interface making it easy to swap out later on if
// we need to update the jquery version or switch to another library.
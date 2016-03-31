$( document ).ready( function() {
    Portfolio.initialize();
} );

// create the root namespace and making sure we're not overwriting it
var Portfolio = Portfolio || {
  initialize: function() {
    $( ".dropdown-toggle" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  }
};

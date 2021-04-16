$( document ).ready( function() {

	$( ".btn-eliminar" ).click( function() {
		$( "#btn-eliminar-confirma" ).attr( "data-idpersona", 
			$( this ).attr( "data-idpersona" ) );
		$( "#modal-persona" ).html( $( this ).attr( "data-persona" ) );
	});

	$( "#btn-eliminar-confirma" ).click( function() {
		location.replace( "url.php?c=" +
				$( this ).attr( "data-c" ) +
				"&s=" +
				$( this ).attr( "data-s" ) +
				"&idpersona=" +
				$( this ).attr( "data-idpersona" ) +
				"&accion=baja&d=procesa" );
	});

});
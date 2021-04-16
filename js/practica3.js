$( document ).ready( function() {
	$( ".form-control" ).addClass( "is-valid" );
	$( "#group-idpersona" ).append( '<DIV class="valid-feedback">Selecciona personas</DIV>' );

	$.ajax({
		"url"     : "cargaidpersona.php",
		"success" : function( response ) {
			var idpersona = JSON.parse( response );

			$( "#idpersona" ).append( '<OPTION value="0">-- Selecciona --</OPTION>' );

			for ( var i = 0; i < idpersona.length; i++ ) {
				$( "#idpersona" ).append( '<OPTION value="' + 
					idpersona[i].idpersona + '">' + idpersona[i].nombre + ' ' +
					idpersona[i].apellidos + '</OPTION>' );
			}
		},
		"error"   : function() {
			alert( "algo pasó!!" );
		}
	});

	$( "#form-idpersona" ).submit( function( evento ) {
		// Deshabilita el submit por default del FORM
		evento.preventDefault();
		$( ".valid-feedback" ).remove();
		$( ".invalid-feedback" ).remove();
		$( ".is-invalid" ).removeClass( "is-invalid" );

		if ( $( "#idpersona" ).val() == 0 ) {
			muestra_error( "idpersona", "Debes seleccionar al menos un ID" );
			return false;
		}

		var url = "practica3.php?";
		var aidpersona = $( "#idpersona" ).val();

		for ( var i = 0; i < aidpersona.length; i++ ) {
			url += "idpersona[]=" + aidpersona[i] + 
				   ( i < aidpersona.length ? "&" : "" );
		}
		$( "#resultado" ).attr( "src", url );
		return true;
	});
});

function muestra_error( campo, mensaje ) {
	$( "#group-"+ campo ).append( '<DIV class="invalid-feedback">' + mensaje + '</DIV>' );
	$( "#" + campo ).addClass( "is-invalid" );
	$( "#" + campo ).focus();
}
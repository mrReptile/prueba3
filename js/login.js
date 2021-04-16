$( document ).ready( function() {
	// Expresión regular para validar correo
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

	// Validación de formulario
	$( "#form-login" ).submit( function( evento ) {
		//evento.preventDefault();	// Elimina comportamiento

		// Remueve todo mensaje de error anterior
		$( ".form-control" ).removeClass( "is-invalid" );
		$( ".invalid-feedback" ).remove();
		$( "#mensaje-validacion" ).html( "" );

		// Validación de campos
		if ( $( "#correo" ).val() == "" ) {
			muestra_error( "correo", "El correo no debe ir vacío" );
			return false;
		} 
		else if ( !regex.test( $( "#correo" ).val().trim() ) ) {
			muestra_error( "correo", "El formato del correo debe ser usuario@dominio.algo" );
			return false;
		} 
		else if ( $( "#contrasenia" ).val() == "" ) {
			muestra_error( "contrasenia", "La contraseña no debe ir vacía" );
			return false;
		}

		return true;
	});

	$( "#enviar-correo-nuevo" ).click( function( e ) {
		//e.preventDefault();
		location.replace( "registro.php?correo=" + $( "#correo-nuevo" ).val() );
	});

});

function muestra_error( campo, mensaje ) {
	$( "#" + campo ).addClass( "is-invalid" );

	$( "#group-" + campo ).append( 
		'<div class="invalid-feedback">' + mensaje + '</div>' );

/*
	$( "#mensaje-validacion" ).html( '<DIV class="alert alert-' + tipo +' alert-dismissible fade show col-md-8"><BUTTON type="button" class="close" data-dismiss="alert">&times;</BUTTON><STRONG>ERROR:</STRONG> ' + mensaje + '</DIV>' );
*/
	$( "#" + campo ).focus();
}
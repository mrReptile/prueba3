$( document ).ready( function() {
	// Expresión regular para validar correo
	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

	// Validación de formulario
	$( "#form-persona" ).submit( function( evento ) {
		//evento.preventDefault();	// Elimina comportamiento

		// Remueve todo mensaje de error anterior
		$( ".form-control" ).removeClass( "is-invalid" );
		$( ".invalid-feedback" ).remove();

		// Validación de campos
		if ( $( "#nombre" ).val() == "" ) {
			muestra_error( "nombre", "El nombre no debe ir vacío" );
			return false;
		} 
		else if ( $( "#apellidos" ).val() == "" ) {
			muestra_error( "apellidos", "Los apellidos no deben ir vacíos" );
			return false;
		} 
		else if ( $( "#correo" ).val() == "" ) {
			muestra_error( "correo", "El correo no debe ir vacío" );
			return false;
		} 
		else if ( !regex.test( $( "#correo" ).val().trim() ) ) {
			muestra_error( "correo", "El formato del correo debe ser usuario@dominio.algo" );
			return false;
		} 
		else if ( $( "#contrasenia" ).val() != "" && $( "#contrasenia" ).val().length < 6 ) {
			muestra_error( "contrasenia", "La contraseña debe contener al menos 6 caracteres" );
			return false;
		}
		else if ( $( "#idpais" ).val() == 0 ) {
			muestra_error( "idpais", "Debe seleccionar un país" );
			return false;
		}
		else if ( $( "#idedo" ).val() == 0 ) {
			muestra_error( "idedo", "Debe seleccionar un estado o provincia" );
			return false;
		}
		else if ( $( "#idpais" ).val() != 3 && $( "#idmpio" ).val() == 0 ) {
			muestra_error( "idmpio", "Debe seleccionar un municipio o condado" );
			return false;
		}
		/* 	Se agregan tantos IF como condiciones de 
			validación sean necesarias */

		return true;
	});


	// USO DE AJAX

	// Actualiza estados
	$( "#idpais" ).change( function() {
	$( "#idedo, #idmpio" ).html( "" );
	$( "#idedo, #idmpio" ).append( '<OPTION value="0">--Seleccione--</OPTION>' );

		$.ajax({
			type: "POST",
			url: "ws/cargaestados.php",
			data: { "idpais": $( this ).val() },
			success: function( response ) {
				var obj = jQuery.parseJSON( response );
				$( "#idedo, #idmpio" ).html( "" );
				$( "#idedo, #idmpio" ).append( '<OPTION value="0">--Seleccione--</OPTION>' );

				for ( var i = 0; i < obj.length; i++ ) {
					$( "#idedo" ).append( '<OPTION value="' +
						obj[i][0] +'">' + obj[i][1] +
						'</OPTION>' );
				}
			}
		});
	});

	// Actualiza municipios
	$( "#idedo" ).change( function() {
	$( "#idmpio" ).html( "" );
	$( "#idmpio" ).append( '<OPTION value="0">--Seleccione--</OPTION>' );

		$.ajax({
			type: "POST",
			url: "ws/cargamunicipios.php",
			data: { 
				"idpais": $( "#idpais" ).val(),
				"idedo" : $( this ).val()
			},
			success: function( response ) {
				var obj = jQuery.parseJSON( response );
				$( "#idmpio" ).html( "" );
				$( "#idmpio" ).append( '<OPTION value="0">--Seleccione--</OPTION>' );

				for ( var i = 0; i < obj.length; i++ ) {
					$( "#idmpio" ).append( '<OPTION value="' +
						obj[i][0] +'">' + obj[i][1] +
						'</OPTION>' );
				}
			}
		});
	});

});

function muestra_error( campo, mensaje ) {
	$( "#" + campo ).addClass( "is-invalid" );

	$( "#group-" + campo ).append( 
		'<div class="invalid-feedback">' + mensaje + '</div>' );

	$( "#" + campo ).focus();
}
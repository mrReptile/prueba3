$( document ).ready( function(){
    
        //But贸n
    
        $( "#btn-paises" ).mouseover(function(){
        $.ajax({
            "url": "WS/cargapais.php",
            "success" : function(response) {
               //alert(response);
            $( "#texto-paises" ).html( "" ); 
                var arreglo = JSON.parse(response);
                
                for( var i = 0; i < arreglo.length; i++){
                    $("#texto-paises" ).append(
                        arreglo[i][1] + "<BR />");
                }
                
                
                
            }
        
            });
        
        
                
            });
            
            $( "#btn-paises" ).mouseout(function(){
               $( "#texto-paises" ).html( "" ); 
            });
	
    
    //Paises
         $.ajax({
            "url": "WS/cargapais.php",
            "success" : function(response) {
                var arreglo = JSON.parse(response);
                
                $("#idpais").append(
                    '<option value="0">--Seleccione--</option>');
                for( var i = 0; i < arreglo.length; i++){
                    $("#idpais" ).append(
                        '<option value="' + arreglo[i][0] + '">' +
                        arreglo[i][1] + '</option>');
                }
                
                
            
            }
        
            });
    
// Actualiza estados
	$( "#idpais" ).change( function() {
	$( "#idedo, #idmpio" ).html( "" );
	$( "#idedo, #idmpio" ).append( '<OPTION value="0">--Seleccione--</OPTION>' );

		$.ajax({
			type: "POST",
			url: "WS/cargaestados.php",
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
			url: "WS/cargamun.php",
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
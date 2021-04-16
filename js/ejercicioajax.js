$( document ).ready( function(){
    
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
            
            
    
    //Estados
            $("#idpais" ).change( function(){
            $("#idedo"  ).html("");
            
            $.ajax({
            "url": "WS/cargaestados.php",
            "type" : "POST",
            "data" : {
                "idpais" : $(this).val()
            },
            "success" : function(response) {
                var arreglo = JSON.parse(response);
                $("#idedo").html("");
                
                $("#idedo").append(
                    '<option value="0">--Seleccione--</option>');
                for( var i = 0; i < arreglo.length; i++){
                    $("#idedo" ).append(
                        '<option value="' + arreglo[i][0] + '">' +
                        arreglo[i][1] + '</option>');
                }
                
                
                
            }
        
    
            });
        
            });
            
    //Municipios
                $("#idpais" ).change( function(){
                $("#idmun"  ).html("");
            
            $.ajax({
            "url": "WS/cargamun.php",
            "type" : "POST",
            "data" : {
                "idedo" : $(this).val()
                },
            "success" : function(response) {
                var arreglo = JSON.parse(response);
                $("#idmun").html("");
                
                $("#idmun").append(
                    '<option value="0">--Seleccione--</option>');
                for( var i = 0; i < arreglo.length; i++){
                    $("#idmun" ).append(
                        '<option value="' + arreglo[i][1] + '">' +
                        arreglo[i][1] + '</option>');
                }
                
                
                
            }
        
    
            });
        
            });
            
    
    
    
    
    
    //Butón
    
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
          
});
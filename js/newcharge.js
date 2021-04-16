$( document ).ready( function() {
    
    alert(":)");
    
   $( "#form-idpersona" ).submit( function( e ){
       e.preventDefault(); //Deshabilita comportamiento por default del submit
       
       $( "#resultado" ).load(
           "card.php?idpersona=" + $( "#idpersona" ).val()
           );
   });
   
});
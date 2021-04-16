<!DOCTYPE !html>
<HTML>
<HEAD>
	<TITLE>Ejercicio Selector Múltiple</TITLE>
	<LINK rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<LINK rel="stylesheet" href="fontawesome/css/all.min.css">

	<SCRIPT src="js/jquery-3.4.1.min.js"></SCRIPT>
	<SCRIPT src="bootstrap/js/bootstrap.min.js"></SCRIPT>
</HEAD>

<BODY>
<DIV class="container">
  <H3>Ejercicio Selector Múltiple</H3>
<?php
extract( $_REQUEST );
// Recibe $productos (YA ES UN ARREGLO)

for ( $i= 0; $i < count( $productos); $i++ ) {
	echo $productos[$i]."<br>";
}

?>
</DIV>

</BODY>
</HTML>
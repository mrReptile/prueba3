<?php
function conectar() {
	
	$servidor       = "localhost";
	$usuario_bd     = "garaar184";
	$contrasenia_bd = "cisco123";
	$bd             = "bd_garaar184";


	$mysqli = new mysqli(  
			$servidor,
			$usuario_bd,
			$contrasenia_bd,
			$bd
		);
	return $mysqli;
}

function desconectar() {
	global $mysqli;
	$mysqli->close();
}
?>

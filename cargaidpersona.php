<?php
include( "helper.php" );
$mysqli = conectar();

$sql = "SELECT idpersona, nombre, apellidos FROM personas ORDER BY idpersona";
$rs = $mysqli->query( $sql );
if ( $mysqli->error ) {
	die( "ERROR EN LA BASE DE DATOS" );
}

$arr = array();
while ( $row = $rs->fetch_assoc() ) {
	extract( $row );
	$arr[] = array(
			"idpersona" => $idpersona,
			"nombre"    => $nombre,
			"apellidos" => $apellidos
		);
}

desconectar();
echo json_encode( $arr );
?>
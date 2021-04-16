<?php
include( "persona.php" );
$mysqli = conectar();
extract( $_REQUEST );
// Recibe $idpersona COMO ARREGLO

?>
<HTML>

<HEAD>
	<TITLE>Práctica 3 - Objetos PHP con base de datos</TITLE>
	<META charset="UTF-8">
	<LINK rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<LINK rel="stylesheet" href="fontawesome/css/all.min.css">

	<SCRIPT src="js/jquery-3.4.1.min.js"></SCRIPT>
	<SCRIPT src="bootstrap/js/bootstrap.min.js"></SCRIPT>
</HEAD>

<BODY>
<DIV class="container">
<?php for( $i = 0; $i < count( $idpersona ); $i++ ) : 
	$persona = new Persona( $idpersona[$i] );
?>
	<DIV class="col col-md-8">
		<DIV class="card">
			<DIV class="card-header bg-info text-white"><?= $persona->getnombre() ?> <?= $persona->getapellidos() ?></DIV>

			<DIV class="card-body"><SMALL><STRONG>ID:</STRONG> <?= $idpersona[$i] ?><BR />
				<STRONG>CORREO:</STRONG> <?= $persona->getcorreo() ?><BR />
				<STRONG>PAÍS:</STRONG> <?= $persona->getnompais() ?><BR />
				<STRONG>ESTADO / PROVINCIA:</STRONG> <?= $persona->getnomestado() ?><BR />
				<STRONG>MUNICIPIO / CONDADO:</STRONG> <?= $persona->getnommpio() ?>
				</SMALL>
			</DIV>
		</DIV>
	</DIV>
	<BR />

<?php endfor; ?>
</DIV>
</BODY>
</HTML>
<?php
desconectar();
?>
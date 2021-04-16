<?php
include( "helper.php" );

class Persona {
	private $idpersona;
	private $nombre;
	private $apellidos;
	private $correo;
	private $idpais;
	private $idestado;
	private $idmpio;

	public function __construct( $idpersona ) {
		global $mysqli;

		$sql = "SELECT * FROM personas WHERE idpersona = '$idpersona'";
		$rs = $mysqli->query( $sql );
		if ( $row = $rs->fetch_assoc() ) {
			extract( $row );

			$this->nombre    = $nombre;
			$this->apellidos = $apellidos;
			$this->correo    = $correo;
			$this->idpais    = $idpais;
			$this->idedo     = $idedo;
			$this->idmpio    = $idmpio;
		}
	}

	public function getnombre()    { return $this->nombre; }
	public function getapellidos() { return $this->apellidos; }
	public function getcorreo()    { return $this->correo; }
	public function getidpais()    { return $this->idpais; }
	public function getidedo()     { return $this->idedo; }
	public function getidmpio()    { return $this->idmpio; }

	public function getnompais() {
		global $mysqli;

		$sql = "SELECT nompais FROM paises WHERE idpais = '".$this->idpais."'";
		$rs = $mysqli->query( $sql );
		$row = $rs->fetch_assoc();

		return $row["nompais"];
	}

	public function getnomestado() {
		global $mysqli;

		$sql = "SELECT nomestado FROM estados 
				WHERE 
					idpais = '".$this->idpais."' AND
					idedo =  '".$this->idedo."'";
		$rs = $mysqli->query( $sql );
		$row = $rs->fetch_assoc();

		return $row["nomestado"];
	}

	public function getnommpio() {
		global $mysqli;

		$sql = "SELECT nommpio FROM municipios
				WHERE 
					idpais = '".$this->idpais."' AND
					idedo = '".$this->idedo."' AND
					idmpio = '".$this->idmpio."'";
		$rs = $mysqli->query( $sql );
		$row = $rs->fetch_assoc();

		return $row["nommpio"];
	}

}
?>
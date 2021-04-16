
<!DOCTYPE html>
<HTML>

<HEAD>
	<TITLE>Práctica 3 - Objetos PHP con base de datos</TITLE>
	<META charset="UTF-8">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" type="text/css"/>
    <link rel="stylesheet" href="fontawesome-free-5.11.1-web/css/all.min.css" type="text/css"/>
    
    <script src="js/jquery/jquery-3.4.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    
    <script src="js/practica3.js"></script>
 
</HEAD>

<BODY>

<DIV class="container col col-md-12">
<H3>Práctica 3 - Objetos PHP con base de datos</H3>

<DIV class="row">

	<DIV class="col col-md-3">
		<FORM id="form-idpersona">
		<DIV class="form-group" id="group-idpersona">
			<LABEL><STRONG>Personas:</STRONG></LABEL>
			<SELECT multiple="multiple" 
					id="personas" name="personas[]" 
					class="form-control" size="10">
			</SELECT>
		</DIV>
		<BUTTON type="submit" 
			class="btn btn-success"><I
				class="fas fa-paper-plane fa-2x"></I> Enviar</BUTTON>
		</FORM>
	</DIV>

	<DIV class="col col-md-9">
		<DIV class="card" style="height: 550px !important;">
			<DIV class="card-header bg-secondary text-white"><STRONG>Resultado de la práctica</STRONG></DIV>
			<DIV class="card-body">
				<IFRAME id="resultado" 
					style="width: 100%; height: 100%; border-style: none;">
				</IFRAME>
			</DIV>
		</DIV>
	</DIV>

</DIV>


</DIV>

</BODY>

</HTML>


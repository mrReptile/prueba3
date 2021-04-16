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

  <FORM action="procesaselectormultiple.php" method="POST">

	<DIV class="form-group">
		<LABEL>Productos:</LABEL>
		<SELECT name="productos[]" 
				class="form-control"
				multiple="multiple" size="5">
			<OPTION value="0">-- Selecciona --</OPTION>
			<OPTION value="1">COMPUTADORA</OPTION>
			<OPTION value="2">PANTALLA</OPTION>
			<OPTION value="3">PROYECTOR</OPTION>
			<OPTION value="4">SMARTPHONE</OPTION>
		</SELECT>
	</DIV>

	<BUTTON type="submit" class="btn btn-info"><I class="fas fa-cog"></I> Procesar</BUTTON>

  </FORM>

</DIV>

</BODY>
</HTML>
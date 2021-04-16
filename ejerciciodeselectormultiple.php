<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="ejerciciocirculo.css">
	<script src="js/jquery-3.4.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js" ></script>
    <title>Selector Multiple</title>
</head>
<body>
    <div class="container col col-md-6">
        <h1>Ejercicio selector Multiple</h1>
        <form action="procesaselectormultiple.php" method="get">
            <div>
                <label>Productos</label>
                <select name="productos[]" id="productos[]" class="form-control" multiple="multiple" size="5">
                <option value="0">--Selecciona--</option>
                <option value="1">Computadora</option>
                <option value="2">Pantallla</option>
                <option value="3">Proyector</option>
                <option value="4">Smartphone</option>
                </select>
            </div>
            <button type="submit" class="btn btn-info"><I class="fas fa-check-circle"></I>Enviar</button>
        </form>
    </div>
    
</body>
</html>
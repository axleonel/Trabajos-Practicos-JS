var diaUsuario = prompt ('Por favor ingrese un dia de la semana');

var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];


var finDeSemana = ['sabado', 'domingo'];




for (var i = 0; i < semana.length; i++) {
	

	if ( semana[i]==diaUsuario )
		{
			alert ('Hoy es dia de semana');
			
		}


}

for (var i = 0; i < finDeSemana.length; i++) {
	
	if (finDeSemana[i]==diaUsuario)
	{
		alert ('hoy es fin de semana')
	}
}

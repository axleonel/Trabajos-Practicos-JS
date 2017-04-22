var val1 = parseInt ( prompt ("Por favor indique un numero"));

var val2 = parseInt ( prompt ("Por favor indique otro numero"));

var eleccion = prompt ('Indique que desea ejecturar: "suma", "resta", "division", "multiplicacion"');


var suma = val1 + val2;
var resta = val1 - val2;
var multiplicacion = val1*val2;
var division = val1/val2;

function calculadora (val1, val2) {

if (eleccion == "suma") {

	console.log ( 'El resultado de la suma es ' + suma); }

else if (eleccion == "resta") {
	console.log ('El resultado de la resta es ' + resta); }

else if (eleccion == "multiplicacion") {
    console.log('El resultado de la multiplicacion es ' + multiplicacion); }
     
else if (eleccion == "division") {
    console.log('El resultado de la division es ' + division); }

}

calculadora()


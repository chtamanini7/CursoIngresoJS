
function mostrar()
{
	var i = 1;
	var result = 0;
	while(i<4){
		var ladoIngresado = parseInt(prompt("Ingrese el lado " + i + " del triangulo", "Lado " + i));
		result = result + ladoIngresado;
		i++;
	}
	alert("El perímetro del triangulo es: " + result);
}

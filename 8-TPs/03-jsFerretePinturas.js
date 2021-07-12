/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp = parseInt(txtIdTemperatura.value);
	var celcius = (temp-32)/(9/5);
	alert(temp + " Fahrenheit son: " + celcius + "°C");
}

function CentigradosFahrenheit () 
{
	var temp = parseInt(txtIdTemperatura.value);
	var fahrenheit = temp*(9/5) + 32;
	alert(temp + " Centigrados son: " + fahrenheit + "°F");
}

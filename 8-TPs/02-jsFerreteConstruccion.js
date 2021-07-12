/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = parseInt(txtIdLargo.value);
	var ancho = parseInt(txtIdAncho.value);
	alert(2*(largo+ancho)*3 + " metros");
}
function Circulo () 
{
	var radio = parseInt(txtIdRadio.value);
	alert(2*(Math.PI)*radio);
}
function Materiales () 
{
	// se que cada 1 metro2 se necesitan 2 de cemento y 3 de cal
	var largo = parseInt(txtIdLargo.value);
	var ancho = parseInt(txtIdAncho.value);
	alert("Se necesitan " + largo*ancho*2 + " bolsas de cemento.\n" + "Se necesitan " + largo*ancho*3 + " bolsas de cal.");
}
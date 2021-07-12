/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
	
function Sumar () 
{
	var price1 = parseInt(txtIdPrecioUno.value);
	var price2 =  parseInt(txtIdPrecioDos.value);
	var price3 =  parseInt(txtIdPrecioTres.value);
	alert(price1 + price2 + price3);
}
function Promedio () 
{
	var price1 = parseInt(txtIdPrecioUno.value);
	var price2 =  parseInt(txtIdPrecioDos.value);
	var price3 =  parseInt(txtIdPrecioTres.value);
	alert((price1 + price2 + price3 )/ 3);
}
function PrecioFinal () 
{
	var price1 = parseInt(txtIdPrecioUno.value);
	var price2 =  parseInt(txtIdPrecioDos.value);
	var price3 =  parseInt(txtIdPrecioTres.value);
	var sumTotal = price1 + price2 + price3;
	alert(sumTotal*1.21);
}
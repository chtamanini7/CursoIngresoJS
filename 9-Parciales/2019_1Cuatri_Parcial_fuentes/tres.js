function mostrar()
{
	var precio = parseInt(prompt("Ingrese el precio"));
	var descuento = parseInt(prompt("Ingrese el descuento"));
	elPrecioFinal.value = (100-descuento)*precio/100;
}

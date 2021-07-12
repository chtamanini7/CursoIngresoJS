function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(true){
		case (destinoIngresado == "Bariloche") || (destinoIngresado == "Ushuaia"):
			alert("FRIO");
			break;
		case (destinoIngresado == "Cataratas") || (destinoIngresado == "Mar del plata"):
			alert("CALOR");
	}

}//FIN DE LA FUNCIÓN
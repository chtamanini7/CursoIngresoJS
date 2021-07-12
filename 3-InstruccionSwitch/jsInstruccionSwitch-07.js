function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(true){
		case destinoIngresado == "Bariloche":
			alert("Oeste");
			break;
		case destinoIngresado == "Cataratas":
			alert("Norte");
			break;
		case destinoIngresado == "Mar del plata":
			alert("Este");
			break;
		default:
			alert("Sur");
	}

}//FIN DE LA FUNCIÓN
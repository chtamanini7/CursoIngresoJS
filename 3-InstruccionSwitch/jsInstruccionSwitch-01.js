function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(true){
		case mesDelAño == "Enero":
			alert("Que comiences bien el año");
			break;
		case mesDelAño == "Marzo":
			alert("A clases!!!");
			break;
		case mesDelAño == "Julio":
			alert("Vacaciones de invierno!!");
			break;
		case mesDelAño == "Diciembre":
			alert("Felices fiestas!");
			break;
		default:
			alert("Meh");
	}

}//FIN DE LA FUNCIÓN
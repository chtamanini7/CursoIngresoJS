function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch(true){
		case mesDelAño == "Enero" || mesDelAño == "Febrero" || mesDelAño == "Marzo" || mesDelAño == "Abril" || mesDelAño == "Mayo" || mesDelAño == "Junio":
			alert("Falta para el invierno.");
			break;
		case mesDelAño == "Julio" || mesDelAño == "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case mesDelAño == "Septiembre" || mesDelAño == "Octubre" || mesDelAño == "Noviembre" || mesDelAño == "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert("Meh");
	}


}//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(true){
		case mesDelAño == "Enero" || mesDelAño == "Marzo" || mesDelAño == "Mayo" || mesDelAño == "Julio" || mesDelAño == "Agosto" || mesDelAño == "Octubre" || mesDelAño == "Diciembre":
			alert("tiene 31 días");
			break;
		case mesDelAño == "Abril" || mesDelAño == "Junio" || mesDelAño == "Septiembre" || mesDelAño == "Noviembre":
			alert("tiene 30 días");
			break;
		case mesDelAño == "Febrero":
			alert("tiene 28 días");
			break;
		default:
			alert("Meh");
	}
	
	



}//FIN DE LA FUNCIÓN
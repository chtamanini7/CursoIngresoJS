function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(true){
		case mesDelAño == "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
	}
	
	


}//FIN DE LA FUNCIÓN
function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	switch(true){
		case (7 <= horaDelDia && horaDelDia <= 11):
			alert("Es de mañana.");
			break;
		default:
			alert("No es de mañana");
	}
	
	



}//FIN DE LA FUNCIÓN
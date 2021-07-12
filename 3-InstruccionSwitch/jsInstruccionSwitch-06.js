function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	switch(true){
		case (7 <= horaDelDia && horaDelDia <= 11):
			alert("Es de mañana.");
			break;
		case (12 <= horaDelDia && horaDelDia <= 19):
			alert("Es de tarde.");
			break;
		case (20 <= horaDelDia && horaDelDia <= 24)||(0 <= horaDelDia && horaDelDia <= 6):
			alert("Es de noche.");
			break;
		default:
			alert("la hora no existe");
	}

}//FIN DE LA FUNCIÓN
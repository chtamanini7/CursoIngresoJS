function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var number = Math.floor((Math.random()*10)) + 1;
	if(number >= 9){
		alert("EXCELENTE " + number);
	}else if(number < 9 && number >= 4){
		alert("APROBADO " + number);
	}else{
		alert("Vamos, la próxima se puede. " + number);
	}
	

}//FIN DE LA FUNCIÓN
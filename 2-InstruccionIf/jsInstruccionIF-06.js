function mostrar()
{
	if(txtIdEdad.value >= 18){
		alert("MAYOR DE EDAD");
	}else if(13 <= txtIdEdad.value && txtIdEdad.value <= 17){
		alert("ADOLESCENTE");
	}else{
		alert("NIÑO");
	}
}//FIN DE LA FUNCIÓN
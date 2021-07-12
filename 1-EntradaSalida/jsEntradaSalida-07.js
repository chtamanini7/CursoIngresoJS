/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	first_num = parseInt(txtIdNumeroUno.value);
	second_num = parseInt(txtIdNumeroDos.value);
	alert(first_num + second_num);	
}

function restar()
{
	first_num = parseInt(txtIdNumeroUno.value);
	second_num = parseInt(txtIdNumeroDos.value);
	alert(first_num - second_num);	
}

function multiplicar()
{ 
	first_num = parseInt(txtIdNumeroUno.value);
	second_num = parseInt(txtIdNumeroDos.value);
	alert(first_num*second_num);	
}

function dividir()
{
	first_num = parseInt(txtIdNumeroUno.value);
	second_num = parseInt(txtIdNumeroDos.value);
	if (second_num == 0) { 
		alert("No podes dividir por 0 bobotonto");
	}else{
		alert(first_num/second_num);
	}
}


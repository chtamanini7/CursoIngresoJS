/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	first_num = parseInt(txtIdNumeroDividendo.value);
	second_num = parseInt(txtIdNumeroDivisor.value);
	alert("El resto es: " + first_num % second_num);
}

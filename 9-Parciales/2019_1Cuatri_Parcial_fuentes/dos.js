function mostrar()
{
	var nombreIntegranteUno;
	var nombreIntegranteDos;
	var pesoIntegranteUno;
	var pesoIntegranteDos;
	var i = 1;
  	while(i<3){
  		var nombreIngresado = prompt("Ingrese el nombre del integrante " + i);
  		var pesoIngresado = parseInt(prompt("Ingrese el peso del integrante: " + i));
  		if(i == 1){
  			nombreIntegranteUno = nombreIngresado;
  			pesoIntegranteUno = pesoIngresado;
  		}else{
  			nombreIntegranteDos = nombreIngresado;
  			pesoIntegranteDos = pesoIngresado;
  		}
  		i++;
  	}
  	var sumPeso = pesoIntegranteUno + pesoIntegranteDos;
  	var promPeso = (pesoIntegranteUno + pesoIntegranteDos)/2;
  	alert("Ustedes se llaman " + nombreIntegranteUno + " y " + nombreIntegranteDos + ".\n" + "Pesan " + pesoIntegranteUno + " y " + pesoIntegranteDos + " kilos, que sumados son " + sumPeso + " kilos y el promedio de peso es: " +promPeso);
}




//Una software factory registra la siguiente informacion de sus empleados:
//Nombre edad (validar)
//sexo (masculino - femenino - no binario)
//puesto (programador - analista - Qa)
//sueldo (entre 15000 y 70000)
//La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) promedio de sueldos para cada puesto
//b) el sexo del que percibe el mayor sueldo
//c) el nombre del empleado femenino con mas sueldo
//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

function mostrar()
{
	

var nombre;
var edad;
var sexo;
var puesto;
var sueldo;
var respuesta = "si";
var promedioSueldoProgramadores;
var promedioSueldoAnalistas;
var promedioSueldoQa;
var mayorSueldo = 0;
var sexoMayorSueldo;
var nombreFemeninoMayorSueldo;
var sueldoFemenino = 0;


//contadores
contadorAnalista = 0;
contadorProgramadores = 0;
contadorQa = 0;
contadorProgramadoresNobinarios = 0;



//acumuladores
acumuladorSueldoProgramadores = 0;
acumuladorSueldoAnalista = 0;
acumuladorSueldoQa = 0;

do
{
	nombre = prompt("ingrese nombre");
	while(!isNaN(nombre))
	{
		nombre = prompt("Reingrese nombre");
	}
	edad = parseInt(prompt("ingrese edad"));
	while(isNaN(edad))
	{
		edad = parseInt(prompt("Reingrese edad"));
	}
	sexo = prompt("ingrese sexo: (masculino - femenino - no binario)");
	while( sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
	{
		sexo = prompt("Reingrese sexo: (masculino - femenino - no binario)");

	}
	puesto = prompt("ingrese puesto : (programador - analista - Qa)");
	while(puesto != "programador" && puesto != "analista" && puesto != "qa")
	{
		puesto = prompt("ingrese puesto : (programador - analista - Qa)");

	}
	sueldo = parseInt(prompt("Ingrese sueldo"));
	while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000)
	{
		sueldo = parseInt(prompt("Reingrese sueldo"));
	}





	switch (puesto) {
		case "programador":
			contadorProgramadores++;
			acumuladorSueldoProgramadores =+ sueldo;
			
			break;
	
		case "analista":
			contadorAnalista++;
			acumuladorSueldoAnalista =+ sueldo;
			break;

		case "qa":
			contadorQa++;
			acumuladorSueldoQa =+ sueldo;
			break;
	}


 if(sueldo > mayorSueldo)
 {
	mayorsueldo = sueldo;
	sexoMayorSueldo = sexo;  // Sexo mayor sueldo

 }

 if (sexo == "femenino" && sueldo > sueldoFemenino)
 {
	 sueldoFemenino = sueldo;
	 nombreFemeninoMayorSueldo = nombre;   //Nombre Femenino mayor sueldo
 }

if( sexo == "no binario" && sexo == "no binario" && (sueldo > 20000 && sueldo < 55000))
{
	contadorProgramadoresNobinarios++; // Contador programadores No binarios con sueldo entre 20000 y 55000
}



respuesta = prompt("Desea ingresar mas datos?")



} while(respuesta = "si");


//Promedio por cada puesto
promedioSueldoProgramadores = acumuladorSueldoProgramadores/contadorProgramadores;
promedioSueldoAnalistas = acumuladorSueldoAnalista / contadorAnalista;
promedioSueldoQa = acumuladorSueldoQa / contadorQa;

document.write("El promedio del sueldo programadores es " + promedioSueldoProgramadores);
document.write("El promedio del sueldo Analistas es " + promedioSueldoAnalistas);
document.write("El promedio del sueldo Qa es " + promedioSueldoQa);
document.write("El sexo que recibe el mayor sueldo es : " + sexoMayorSueldo);
document.write("El nombre del empleado femenino con mayor sueldo es  " + nombreFemeninoMayorSueldo);
document.write(" La cantidad de programadores no binarios que reciben sueldo entre 20000 y 55000 es :" + contadorProgramadoresNobinarios);




}

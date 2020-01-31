console.log("Jugando...");

function zoom(idCoche){

	console.log("Haciendo Zoom");

	var coche=document.getElementById("player"+idCoche);//Guardamos el 

	console.log(coche);//Nos muestra la etiqueta entera de la imagen

	coche.style.width="250px";// Nos agranda la imagen

}

function antizoom(idCoche){
	var coche=document.getElementById("player"+idCoche);//Guardamos el 
	coche.style.width="150px";// Nos agranda la imagen	
}
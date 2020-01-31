function diagnosticar(){

    console.log("DIAGNOSTICANDO");

    var dolorCabeza=document.getElementById("dolorCabeza").checked; //devuelve una referencia de un elemento a través del id.
    var fiebre=document.getElementById("fiebre").checked;
    var origen=document.getElementById("origenChina").checked;

    if(dolorCabeza==true){
        if(fiebre==true){
            if(origen==true){
            alert("Enhorabuena! Viniste con la compania del Coronavirus");
            }
            else{
                alert("Gripe");
            }
        }
        else{
            alert("Nada: Paracetamol");
        }     
    }else{// si no le duele la cabeza
        alert("Sano");
    }
}

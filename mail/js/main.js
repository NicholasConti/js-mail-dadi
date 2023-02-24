"use strict";
//input utente
const mailUtente = prompt('Inserisci la tua mail');
//array
const listaMail = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "minny@gmail.com"];

let esitoCheck = false;
// ciclo x confrontare i valori nell' array con l' input utente
for (let i = 0 ; i < listaMail.length ; i++){
    if  (mailUtente === listaMail[i]){
        esitoCheck = true;
    } 
}

if (esitoCheck === true){
    alert('Puoi accedere!')
} else {
    alert('Non puoi accedere')
}
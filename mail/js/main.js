"use strict";

const mailUtente = prompt('Inserisci la tua mail');

const listaMail = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "minny@gmail.com"];

let esitoCheck = false;

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
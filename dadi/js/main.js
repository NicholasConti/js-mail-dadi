"use strict";

const numeroUtente = Math.floor(Math.random()* 6 + 1);
const numeroPc = Math.floor(Math.random()* 6 + 1);

console.log(`L' utente ha estratto: ${numeroUtente}`);
console.log(`Il PC ha estratto: ${numeroPc}`);

if (numeroUtente > numeroPc){
    console.log(` L' utente ha vinto!`);
} else if (numeroUtente < numeroPc){
    console.log(` La Macchina ha vinto!`);
} else {
    console.log(` E patta!`);

}
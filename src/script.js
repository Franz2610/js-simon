/**
 * Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

/**
 * Inizio a prendere tutto le mie const dal mio html
 * Costruisto un array
 * Creo la funzione sul mio start per creare i numeri ed avviare il time out
 * (setTimout(funzione)) per avviare la conta dei secondi
 * nb moltiplicare x 1000 per quanto riguarda i secondi 
 * creare un evento al check per verificare i numeri corretti per poi scrivere il risultato
 * funzioni da creare:
 * 1) usare una funzione per generare i num gRN
 * 2) creare un generatore con la funzione push che aggiunge numeri nell'array legata alla grn
 * 3) dopo aver controllato se escono dei numeri casuali al click farli scomparire inserendo un testo a piacere
 * 4) creare una funzione for che controlla quali numeri sono corretti rispetto a quelli visti ed inseriti 
 * 5) infine scrivere il risultato finale
 */

const start = document.getElementById('start');
const numPc = document.getElementById("numPc");
const numInput = document.getElementById('numInput');
const text = document.getElementById("text");
const check = document.getElementById("check");
const randomNumbers = createRN(5);


// creo array di input
const num = [
  document.getElementById("number-1"),
  document.getElementById("number-2"),
  document.getElementById("number-3"),
  document.getElementById("number-4"),
  document.getElementById("number-5")
];


start.addEventListener('click', function() {    
    // stampo in pagina
    numPc.innerText = randomNumbers;

    setTimeout(function() {
      createNum(numPc);
      numInput.classList.remove('d-none');
    }, 2000);    // parte il timer di 2 secondi.
    // Dopo 2 secondi, ed i numeri scompaiono. 
});

// il software dice quanti e quali numeri sono stati indovinati.
check.addEventListener("click", function() {
  let checkNum = checkNums(randomNumbers, num);
  finalGame(checkNum, text);
});

// funnzioni


// numero casuale
function getRndNumber(min, max){
  return Math.floor(Math.random()* (max - min + 1 )) + min;
}

// crea numeri random con la funzione for
function createRN(quantity) {
  let randomNumbers = [];
  for(let i = 0; i < quantity; i++) {
    randomNumbers.push(getRndNumber(1, 100));
  }
  return randomNumbers;
}

// funzione per far sparire i numeri random
function createNum(switchNum) {
  switchNum.innerText = "Scrivi i numeri nella stessa sequenza";
}


// Array
function checkNums(numPc, userNumbers) {
  const rightNumbers = [];
  for(let i = 0; i < userNumbers.length; i++) {
    if(numPc[i] == userNumbers[i].value) {
      rightNumbers.push(numPc[i]);
    }
  }
  return rightNumbers;
}

// fine gioco da i numeri esatti all'utente
function finalGame(rightNumbers, finalText) {
  // stampa quanti numeri ha indovinato l'utente
  finalText.innerHTML = `
  Hai indovinato ${rightNumbers.length} numeri.
  I numeri che hai indovinato sono: ${rightNumbers}`;
}
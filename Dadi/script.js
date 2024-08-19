console.log ('JS OK')

// Recupero Elemento dal DOM
const numbers = document.getElementById('numbers')

// Preparo la stringa che conterrà gli elementi

let items = '';
let message = '';

// Genero un numero Randon da 1 a 6 per l'utente

const numberUser = Math.floor(Math.random() * 6) + 1;
console.log(numberUser)
 
// Genero un numero Random da 1 a 6 per il computer

const numberPc = Math.floor(Math.random() * 6) + 1;
console.log(numberPc)

//Mostro in Pagina i numeri

items += `<h1> Il tuo numero è ${numberUser}, il mio numero è ${numberPc} <h1>`

//Decretiamo il vincitore
if (numberUser < numberPc){
    items += `<h1> hai perso mi dispiace <h1>`
} else if (numberUser === numberPc) {
    items += `<h1>  risultato pari <h1>`
} else {
    items += `<h1> hai vinto complimenti <h1>`
}

// Inserisco i risultati in Pagina

numbers.innerHTML = items;
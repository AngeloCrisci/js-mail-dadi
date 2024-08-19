console.log ('JS OK')

// Recupero elemento dal DOM per stampare in Pagina

const validation = document.getElementById('validation')

// Preparo stringa che conterrà il messaggio di verifica

let message = '';

// Creiamo una lista di mail autorizzate

const emails = ['angelocrisci@js.it' , 'angelocrisci@gmail.com' , 'angelocrisci@libero.it' , 'angelocrisci@hotmail.it']

// Elementi del Form

const userEmail = document.getElementById('useremail')
const confirmButton = document.getElementById('confirm-button')

// Recupero Email tramite il click del buttuon

confirmButton.addEventListener('click' , function(){
    const emailValue = userEmail.value.trim();
})

// Controllo se l'email dell'utente è tra quelle autorizzate



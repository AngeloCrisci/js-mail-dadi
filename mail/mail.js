console.log ('JS OK')

// Recupero elemento dal DOM per stampare in Pagina

const validation = document.getElementById('validation')

// Creiamo una lista di mail autorizzate

const emails = ['angelocrisci@js.it' , 'angelocrisci@gmail.com' , 'angelocrisci@libero.it' , 'angelocrisci@hotmail.it']

// Elementi del Form

const userEmail = document.getElementById('useremail')
const confirmButton = document.getElementById('confirm-button')



// Preparo il flag

let isAllowed = false;

// Recupero Email tramite il click del buttuon

confirmButton.addEventListener('click' , function(){
// Raccolta dati
const emailValue = userEmail.value.trim();

// Controllo se l'email dell'utente è tra quelle autorizzate
for (let i = 0; i < emails.length ; i++ ){
    const email = emails[i];
    if (emailValue === email){
        isAllowed = true;
    }
}
// Calcolo il messaggio in pagina
const message = isAllowed ? 'Benvenuto' : 'Acceso negato'

// Inserisco risultato in Pagina
validation.innerHTML = message;

})












// esercizio 1 
// // controllare se la parola inserita dall'utente è palindroma
// // richiesta parola all'utente
// let userword = prompt('inserisci parola')
// console.log(userword,typeof userword)
// let reverseWord = userword.reverse();
// // creazione funzione per capire se la parola è palindroma
// function palindroma(userword) {
//     let check  = ( userword === userword.reverse() )
//     return check;
// }
// // console.log(userword)







// esercizio 2 
// l'utente sceglie pari o dispari e inserisce un numero da 1 a 5, estraggo randomicamente un numero da 1 a 5 per il computer sommo i due valori e vedo se sono pari o dispari 

// scelta da parte dell'utente di pari o dispari
// l'utente inserisce un numero da 1 a 5 
let userNumber = 0;
userNumber = prompt('inserisci un numero da 1 a 5')
if (userNumber>5){
    alert('il numero inserito deve essere compreso tra 1 e 5')
}
// estrazione randomica di un numero per il pc
function computerNumber (){
    Math.random
}
// somma del numero inserito dall'utente e quello del computer
// verifica se il numero è pari o dispari
// alert per comunicar il vincitore

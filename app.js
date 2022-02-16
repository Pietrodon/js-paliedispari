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
userNumber = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(userNumber, typeof userNumber)
if (userNumber>5){
    alert('il numero inserito deve essere compreso tra 1 e 5')
}
// estrazione randomica di un numero per il pc
function randomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
let computerNumber = (randomNumber(1,5))
console.log(computerNumber)
// somma del numero inserito dall'utente e quello del computer
let sum = (userNumber + computerNumber)
console.log(sum)
// verifica se il numero è pari o dispari
let check = false;
function verifica(sum){
    if (sum % 2 === 0){
        check = true
    } 
    
}
let controllo = verifica(sum)
console.log(check)
// alert per comunicar il vincitore
if(verifica){
    alert('il numero è pari')
} else{
    alert('il numero è dispari')
}

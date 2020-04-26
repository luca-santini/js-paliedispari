// Gioco pari o dispari contro il pc
// chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5 FATTO
// chiedere all'utente se sceglie pari o dispari
// fare la somma dei due numeri (giocata utente + giocata pc) FATTO
// valutare se il risultato è pari o dispari
// comunicare all'utente se ha vinto o meno

// funzione pari o dispari
function is_pari(numero) {
    var resto = numero % 2;
    if(resto == 0) {
        // il numero è pari
        return true;
    } else {
        // il numero è dispari
        return false;
    }
}

// chiedere un numero all'utente tra 1 e 5 e dirgli se è pari o dispari
var numero_utente = parseInt(prompt('inserisci un numero tra 1 e 5'));

var pari_dispari_utente = is_pari(numero_utente);
    if(pari_dispari_utente == true) {
    console.log(numero_utente + ' numero pari');
} else {
    console.log(numero_utente + ' numero dispari');
}

// generare un numero random tra 1 e 5
var numero_random = Math.floor(Math.random() * 5) + 1;
var pari_dispari_random = is_pari(numero_random);
    if(pari_dispari_random == true) {
    console.log(numero_random + ' numero pari');
} else {
    console.log(numero_random  + ' numero dispari');
}

// somma numero utente e numero random
var somma = numero_utente + numero_random;
console.log('Somma numeri: ' + somma);
var pari_dispari_somma = is_pari(somma);
    if(pari_dispari_somma == true) {
    console.log(somma + ' numero pari');
} else {
    console.log(somma  + ' numero dispari');
}

// Gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5 chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// chiedere un numero all'utente
var giocata_utente = parseInt(prompt('inserisci un numero tra 1 e 5', 1));
console.log('giocata utente: ' + giocata_utente);

// generare un numero random
var giocata_pc = Math.floor(Math.random() * 5) + 1;
console.log('giocata pc: ' + giocata_pc);

// somma giocata utente e giocata pc
var somma = giocata_utente + giocata_pc;
console.log('Somma giocate: ' + somma);

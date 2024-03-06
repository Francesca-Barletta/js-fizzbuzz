console.log('fizzbuzz')
/*Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz” al post del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore 
inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */

//stampare in console i numeri da 1 a 100
  //dichiarare una variabile uguale a 100
//per i multipli di 3 stampare in console "fizz" al posto del numero
  //con operatore modulo determinare se un numero è multiplo di 3 quindi il numero deve essere divisibile per 3 con resto 0
//per i multipli di 5 stampare la parola "buzz" al posto del numero
  //con operatore modulo determinare se un numero è multiplo di 5 quindi il numero deve essere divisibile per 5 con resto 0  
// se un nuuero è sia multiplo di 3 che di 5 dobbiamo stampare "fizzbuzz" al posto del numero

let n = 100;

for(let i = 0; i < n; i++){
    let num = i + 1;
    console.log(num)
}
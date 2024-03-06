
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

//////////////////////////////////////////////////
//pseudocodice

//per i multipli di 3 stampare in console "fizz" al posto del numero
//con operatore modulo determinare se un numero è multiplo di 3 quindi il numero deve essere divisibile per 3 con resto 0
//per i multipli di 5 stampare la parola "buzz" al posto del numero
//con operatore modulo determinare se un numero è multiplo di 5 quindi il numero deve essere divisibile per 5 con resto 0  
// se un numero è sia multiplo di 3 che di 5 dobbiamo stampare "fizzbuzz" al posto del numero


//dichiaro una variabile n uguale a 100
let n = 100;
//dichiaro una variabile i uguale a 0 che deve ripetersi tanto quanto vale n
// in questo modo avrò i numeri da 0 a 99
for (let i = 0; i < n; i++) {
    // dichiaro una variabile num che è uguale a i + 1 come risultato avrò i numeri da 1 a 100
    let num = i + 1;
    //devo stampare i numeri da 1 a 100 ma 
    //SE un numero è multiplo di 3 devo stampare fizz invece di num
    //SE un numero è multiplo di 5 devo stampare buzz invece di num
    //SE un numero è sia multiplo di 3 che di 5 devo stampare fizzbuzz

    //per i multipli di 3 stampare in console "fizz" al posto del numero
    //con operatore modulo determinare se un numero è multiplo di 3


    let multiploTre = num % 3;
    //quindi il numero deve essere divisibile per 3 con resto 0



    //per i multipli di 5 stampare la parola "buzz" al posto del numero
    //con operatore modulo determinare se un numero è multiplo di 5

    let multiploCinque = num % 5;
    //quindi il numero deve essere divisibile per 5 con resto 0  


    const divElement = document.querySelector('.row');

    // se il numero è uguale a un multiplo di 3 e uguale a un multiplo di 5 stampo fizzbuzz
    if (multiploCinque === 0 &&
        multiploTre === 0) {
        console.log('fizzbuzz')
        divElement.innerHTML += `
        <div class="bg-primary text-white text-center cube">
           <p class="fs-4 m-0">fizzbuzz</p>
        </div>`
    }
    // se il numero è uguale a un multiplo di 5 stampo buzz
    else if (multiploCinque === 0) {
        console.log('buzz')
        divElement.innerHTML += `
        <div class="bg-danger text-center cube">
            <p class="fs-4 m-0">buzz</p>
        </div>`
    }
    //se invece  il numero è un multiplo di 3 stampo fizz
    else if (multiploTre === 0) {
        console.log('fizz')
        divElement.innerHTML += `
        <div class="bg-warning text-center cube">
            <p class="fs-4 m-0">fizz</p>
        </div>`
    }
    //altrimenti il numero non è ne multiplo di 3 ne di 5 stampo numero
    else {
        console.log(num);
        divElement.innerHTML += `
        <div class=" bg-success text-center cube">
            <p class="fs-4 m-0">${num}</p>
        </div>`
    }


}
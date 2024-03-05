/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = [ 'A', 'J', 'Q', 'K' ]; 

//Esta funcion crea las barajas
const crearDeck = () => {
    for ( let i=2; i<=10; i++ ) {
        for( const tipo of tipos) {
            deck.push( i + tipo);
        }
    }  
    for ( let especial of especiales){
        for( let tipo of tipos){
            deck.push( especial + tipo );
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck); // Esta funcion de la biblioteca underscore, mezcla el array de cartas
    console.log(deck);
    return deck
   
}

crearDeck();

//Funcion que tomara una carta.
const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }

    let carta = deck.pop();
    console.log(deck);
    console.log({carta});
    return carta;
}
// pedirCarta();

// Funcion para saber el valor de la carta
const valorCarta = (carta) => {
    // Para saber el valor de la carta substraigo los valores 0 y el subsiguiemte, si existe, en el caso del 10
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor) ) ? // si no es numero haz la siguiente evaluacion
           ( valor === 'A') ? 11 : 10 // como no es un numero, si es igual a A equivale a 11 puntos, sino a 10 puntos
           : valor * 1; // y si en el string tiene valor de numero, lo convertimos a numero multiplicandolo por 1.
        }
const valor = valorCarta( pedirCarta() );
console.log({valor});

// La manipulacion del DOM
// Chqear las anotaciones an mi mascota. 
// Se refiera a los metodos y propiedades que tiene el objeto global del navegador document
// eje: document.querySelector(), document.getElementById(), etc...
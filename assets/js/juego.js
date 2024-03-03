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

pedirCarta();
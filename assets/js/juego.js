/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = [ 'A', 'J', 'Q', 'K' ]; 

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

    console.log(deck);

    deck = _.shuffle(deck); // mezcla el array de cartas
    return deck
    console.log(deck);

}

crearDeck();
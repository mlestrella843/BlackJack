/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = [ 'A', 'J', 'Q', 'K' ]; 

let puntosJugador=0;
let puntosComputador=0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
// console.log(btnPedir);
const puntosHTML = document.querySelectorAll('small');

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
    console.log(deck);
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
    // console.log(deck);
    // console.log({carta});
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
 // Esto es para comprobar el vaor que se esta extrallendo de la carta.       
// const valor = valorCarta( pedirCarta() );
// console.log({valor});

// La manipulacion del DOM
// Chqear las anotaciones an mi mascota. 
// Se refiera a los metodos y propiedades que tiene el objeto global del navegador document
// eje: document.querySelector(), document.getElementById(), etc...

//Manipulacion del DOM II
//Identificar con un id el div donde quiero colocar el boton. Ejemplo id="divBotones"
//Luego crear una constante que haga referencia al dom y me permita crear un elemento.
// const botonNnuevo = document.createElement('button')
// luego divBotones.append(botonNuevo); esto me permite crear el boton dentro del div )
// botonNuevo.innerText = 'Amar';  // esto me permite poner texto dentro del boton.
// botonNuevo.classList.add('btn'); esto me permite crear las clases del boton, clases de boostrap en este caso
// botonNuevo.classList.add('btn-success'); luego la otra subclase de boostrap.
// igual para crear un INPUT
// const input = document.createElement('input'); Creando un input.
// document.body.append( input );
// input.classList.add('form-control');
// input.placeholder = 'Enter name';

//EVENTOS

btnPedir.addEventListener('click', () => {
    // console.log('Testing button');
    const carta = pedirCarta();
    // console.log(carta);
    // Funcion que es para sumar los puentos del jugador. Sebe llegar a 21 para ganar. Si le falta o se pasa no gana.
    puntosJugador = puntosJugador + valorCarta( carta ) ;
    puntosHTML[0].innerText = puntosJugador ; 

});
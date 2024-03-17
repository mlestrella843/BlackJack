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
const btnDetener = document.querySelector('#btnStop');
const btnNuevoJuego = document.querySelector('#btnNewGame');
// console.log(btnPedir);
// Hago una referencia hacia el div del jugador en el html.
const divCartaJugador = document.querySelector('#player-card');
// Hago referencia hacia los puentos del jugador dentro del elemento small.
const divCartaComputador = document.querySelector('#computer-card');

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


   // TURNO DE LA COMPUTADORA
   // La computadora debe superar en puntos al jugador al momento de este detener el juego para el.
   // los puntosMinomos seran los puentos de jugador, con el objetivo de que esta los iguale o supere.
   const turnoComputadora = ( puntosMinimos ) => {
        do {
            const carta = pedirCarta();
            puntosComputador = puntosComputador + valorCarta( carta ) ;
            puntosHTML[1].innerText = puntosComputador ; 
            
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add('card');
            divCartaComputador.append( imgCarta );

            if( puntosMinimos > 21){
                break;
            }
        } while ( ( puntosComputador < puntosMinimos ) && ( puntosMinimos <= 21 ) );


        setTimeout(() => {            
            // Aqui comprueba las situaciones posibles y al final imprime quien gano o perdio el juego.
            // Utilizamos esta funcion de javascript, para que el mensaje salga despues de 10 milisegundos
            // y asi termine el hilo correspondiente que permite desplegar las cartas.
            if( puntosComputador === puntosMinimos ) {
                alert( 'Nadie Gano');
            } else if( puntosMinimos > 21 ) {
                alert( 'La Computadora Ganó' );
            } else if( puntosComputador > 21 ) {
                alert( 'El Jugador Ganó' );
            } else{
                alert(' Computador gana');
            }

        }, 10 );  

   }



//EVENTOS
// Funcion que al dar click pide una carta, lee el valor de la carta, suma los puntos y los imprime en la puntuacion del jugador.
btnPedir.addEventListener('click', () => {
    // console.log('Testing button');
    const carta = pedirCarta();
    // console.log(carta);
    // Funcion que es para sumar los puentos del jugador. Sebe llegar a 21 para ganar. Si le falta o se pasa no gana.
    puntosJugador = puntosJugador + valorCarta( carta ) ;
    puntosHTML[0].innerText = puntosJugador ; 
    // <img class="card" src="assets/cartas/10H.png" alt="card"></img>
    //creamos un elemento img dentro del docuemtno html.
    const imgCarta = document.createElement('img');
    // aplicamos el metodo src a la imagen, para que la lea de forma dinamica segun el resulatdo de la funcion pedirCarta();
    imgCarta.src = `assets/cartas/${ carta }.png`;
    //Luego el anadimos la clase personalizada en nuestra hoja de estilos.
    imgCarta.classList.add('card');
    // Y luego la agregamos a nuestro DOM con todas las propiedades agreagdas.
    divCartaJugador.append( imgCarta );

    // Debemos controlar las cartas que podra tomar el jugador. El limite es 21 puntos.
    // Aqui desabilitamos el boton de pedir cartas.
    if (puntosJugador > 21) {
        console.warn("Has perdido");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ){
        console.info("¡Felicidades! Has ganado");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});


btnDetener.addEventListener("click", () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador );
})

btnNuevoJuego.addEventListener("click", () => {

    console.clear();
    deck = [];
    deck = crearDeck();
    
    puntosJugador = 0;
    puntosComputador = 0; //

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartaComputador.innerHTML = ' ';
    divCartaJugador.innerHTML = ' ';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

})

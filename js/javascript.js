// DOM: Obtener elementos
let tablero = document.getElementById("tablero");
let boton_play = document.getElementById("boton_play");
let boton_pause = document.getElementById("boton_pause");
let boton_reset = document.getElementById("boton_reset");

// Estados Cronometro
let esta_activo = false;
let time = {
    segundos: 10,
    minutos: 29,
    horas: 1
}

// Funcion Actualizar
function formato(numero) {
    if (numero < 10) {
        return "0" + numero;
    }
    else {
        return numero;
    }
}
function actualizar() {
    time.segundos--;
    if (time.segundos == 0) {
        time.segundos = 60;
        time.minutos--;
    }
    if (time.minutos == 0) {
        time.minutos = 60;
        time.horas--;
    }
    tablero.innerHTML = `${formato(time.horas)}:${formato(time.minutos)}:${time.segundos}
    `
    if (esta_activo == true) {
        setTimeout(actualizar, 1000);
    }
}

// Funciones Botones
function play() {
    if (esta_activo == false) {
        esta_activo = true;
        actualizar();
    }
}
function pause() {
    esta_activo = false;
}
function reset() {
    time.segundos = 10;
    time.minutos = 29;
    time.horas = 1;
    tablero.innerHTML = `${formato(time.horas)}:${formato(time.minutos)}:${time.segundos}`
}

// Escuchar Eventos
boton_play.addEventListener('click', play);
boton_pause.addEventListener('click', pause);
boton_reset.addEventListener('click', reset);
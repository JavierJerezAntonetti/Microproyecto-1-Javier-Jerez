
// ------------ HERO ------------
window.onload = function () {
    // Variables
    const IMAGENES = [
        './images/html-code.jpg',
        './images/guy-coding.jpg',
        './images/laptop-code.jpg'
    ];
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
}


// ------------ SKILLS ------------
function validate() {

    if( document.myForm.name.value == "" ) {
        alert( "Por favor introduce tu nombre!" );
        document.myForm.name.focus();
        return false;
    }
    if( document.myForm.msg.value == "" ) {
        alert( "Por favor ingresa tu mensaje!" );
        document.myForm.msg.focus();
        return false;
    }
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (document.myForm.mail.value.match(mailformat)) {
        alert("SOLICITUD ENVIADA CON ÉXITO!")
        document.myForm.mail.focus();
        return true;
    } else {
        alert("Por favor introduce un correo válido!")
        document.myForm.mail.focus();
        return false;
    }
}
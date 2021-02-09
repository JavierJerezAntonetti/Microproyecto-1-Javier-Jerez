
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
var skills = {
    "programacion":"60% de Habilidad", 
    "desarrollo":"30% de Habilidad",
    "tecnologia":"75% de Habilidad"
};

function showpro(){
    alert(skills.programacion);  
    return true  
}

function showdes(){
    alert(skills.desarrollo);  
    return true  
}

function showtec(){
    alert(skills.tecnologia);  
    return true  
}

// ------------ CONTACT ME ------------
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
    if( document.myForm.mail.value.includes("@")) {  
        alert("SOLICITUD ENVIADA CON ÉXITO"); 
        document.myForm.mail.focus();
        return true;  
    } else {
        alert("Por favor ingresa un correo válido!");  
        document.myForm.mail.focus();
        return false;  
    }
}

//CONSTANTES PARA SOBRE MI
const abrirModalSobreMi = document.querySelector(".seccion-izq__sobreMi"); //se guarda en una variable el sitio del click
 
const modalSobreMi = document.querySelector(".modalAboutMe"); //se guarda en una variable el contenedor que tiene todo el modal

const modalSalirSobreMi = document.querySelector(".modal__salidaSobreMi"); //se guarda en una variable el boton en este caso, etiqueta a



abrirModalSobreMi.addEventListener("click", (e)=> {
    e.preventDefault();
    modalSobreMi.classList.add("modal--show");
});


modalSalirSobreMi.addEventListener("click", (e)=> {
    e.preventDefault();
    modalSobreMi.classList.remove("modal--show");
});



//CONSTANTES PARA TEST FÍSICOS
const abrirModal = document.querySelector(".seccion-izq__test"); //se guarda en una variable el sitio del click
 
const modal = document.querySelector(".modal"); //se guarda en una variable el contenedor que tiene todo el modal

const modalSalir = document.querySelector(".modal__salida"); //se guarda en una variable el boton en este caso, etiqueta a



abrirModal.addEventListener("click", (e)=> {
    e.preventDefault();
    modal.classList.add("modal--show");
});


modalSalir.addEventListener("click", (e)=> {
    e.preventDefault();
    modal.classList.remove("modal--show");
});



//CONSTANTES PARA ESTRATEGIAS
const abrirModalEstrategia = document.querySelector(".seccion-izq__estrategia"); //se guarda en una variable el sitio del click
 
const modalEstrategia = document.querySelector(".modalEstrategias"); //se guarda en una variable el contenedor que tiene todo el modal

const modalSalirEstrategia = document.querySelector(".modal__salidaEstrategia"); //se guarda en una variable el boton en este caso, etiqueta a



abrirModalEstrategia.addEventListener("click", (e)=> {
    e.preventDefault();
    modalEstrategia.classList.add("modal--show");
});


modalSalirEstrategia.addEventListener("click", (e)=> {
    e.preventDefault();
    modalEstrategia.classList.remove("modal--show");
});



//CONSTANTES PARA PAUSAS ACTIVAS
const abrirModalPausa = document.querySelector(".seccion-izq__Pausa"); //se guarda en una variable el sitio del click
 
const modalPausasActiva = document.querySelector(".modalPausasActivas"); //se guarda en una variable el contenedor que tiene todo el modal

const modalSalirPausa = document.querySelector(".modal__salidaPausaActiva"); //se guarda en una variable el boton en este caso, etiqueta a



abrirModalPausa.addEventListener("click", (e)=> {
    e.preventDefault();
    modalPausasActiva.classList.add("modal--show");
});


modalSalirPausa.addEventListener("click", (e)=> {
    e.preventDefault();
    modalPausasActiva.classList.remove("modal--show");
});
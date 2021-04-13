// querySelector

const heading=document.querySelector('#heading');// Retorna 0 o 1 elemento
//heading.textContent='Daniel Ruiz'
//heading.classList.add('nueva-clase');
console.log(heading);


//querySelectorAll
const enlaces=document.querySelectorAll('.navegacion a');
//enlaces[0].textContent = 'Nuevo Texto para enlace';
//enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace')

// Generar un nuevo enlace

const nuevoEnlace=document.createElement('A')

// Agregar el href

nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar Texto
nuevoEnlace.textContent ='Nuevo Enlace';

// Agregar Clase
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

//Agregarlo al documento
const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//EVENTOS

console.log(1);
window.addEventListener('load',function(){  // Load  esperar a que JS y los archivos de HTML este listos.
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // Solo espera los archivos de HTML
    console.log(4);
})

console.log(5);

window.onscroll=function(){
    console.log('scrolling...')
}

// Seleccionar elementos y asociarles un evento
/*
const btnEnviar=document.querySelector('.boton--primario');
btnEnviar.addEventListener('click',function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario');

});

*/

// Eventos de inputs y textarea

const datos={
    nombre: '',
    email:'',
    mensaje:''
}

const nombre=document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario');

nombre.addEventListener('input',leertexto)
email.addEventListener('input',leertexto)
mensaje.addEventListener('input',leertexto)
// Evento de submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    
    // validar formulario

    const {nombre,email,mensaje}= datos;
    if(nombre=='' || email=='' || mensaje==''){
        mostrarAlerta('Todos los campos son obligatorios','error')
        
        return; // corta la ejecucion del codigo
    }

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    // Enviar Formulario
    console.log("Enviando Formulario...")
    mostrarAlerta('Enviando Formulario...')
    
})

function leertexto(e){
    //console.log(e.target.value);
    datos[e.target.id]=e.target.value;

   // console.log(datos);
}

function mostrarAlerta(mensaje,error=null){
    const alerta = document.createElement('P')
    alerta.textContent=mensaje;

    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('mensaje')
    }

    formulario.appendChild(alerta)
    setTimeout(()=>{
        alerta.remove();
    },3000);

}
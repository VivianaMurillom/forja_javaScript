// Punto 2

const user1=52368795;
const user2=1001235478;
const user3=25413574;
const user4=1007203506;

const register1=document.querySelector('registro1');
const register2=document.querySelector('registro2');
const register3=document.querySelector('registro3');
const register4=document.querySelector('registro4');

let buttonSearchU=document.querySelector('.buscar');

buttonSearchU.addEventListener('click', buscarDocument=(e)=>{
    e.preventDefault();

    let dataUserDocument=document.getElementById('document').value;

    if (dataUserDocument===user1) {
        validador.style.setProperty('visibility','visible');
    } else {
        
    }


});

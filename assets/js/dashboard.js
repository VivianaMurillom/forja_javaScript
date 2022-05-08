// Punto 2

const user1=52368795;
const user2=1001235478;
const user3=25413574;
const user4=1007203506;

let buttonSearchU=document.querySelector('.buscar');

buttonSearchU.addEventListener('click', buscarDocument=(e)=>{
    e.preventDefault();

    let dataUserDocument=parseInt(document.getElementById('document').value);

    if (dataUserDocument===user1) {
        var elemento=document.querySelectorAll('.registro1');
        for (var i = 0; i<elemento.length; i++){
            elemento[i].classList.add('active');
        }
    } else if (dataUserDocument===user2) {
        var elemento=document.querySelectorAll('.registro2');
        for (var i = 0; i<elemento.length; i++){
            elemento[i].classList.add('active');
        }
    } else if (dataUserDocument===user3) {
        var elemento=document.querySelectorAll('.registro3');
        for (var i = 0; i<elemento.length; i++){
            elemento[i].classList.add('active');
        }
    } else if (dataUserDocument===user4) {
        var elemento=document.querySelectorAll('.registro4');
        for (var i = 0; i<elemento.length; i++){
            elemento[i].classList.add('active');
        }
    }
});

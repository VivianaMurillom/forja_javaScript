// Punto 1

const userName='Admin';
const userPasword='Kuepa2022';

let buttonLogin = document.querySelector('.ingresar');

buttonLogin.addEventListener('click', enviar=(e)=>{
    e.preventDefault();

    let dataUserName=document.getElementById('user').value;
    let dataUserPassword=document.getElementById('password').value;

    if (userName===dataUserName && userPasword===dataUserPassword) {
        window.setTimeout(()=>{window.location.href='dashboard.html'},2000);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡No es posible iniciar sesión!',
          })
    }
});

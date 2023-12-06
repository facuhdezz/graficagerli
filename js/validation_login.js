let toAppendEmail = document.getElementById('divEmail');
let toAppendPassword = document.getElementById('divPassword');

async function f(email) {
    try {
        let response =  await fetch(`http://localhost:3000/users/${email}`);
        let user = await response.json();
        return user.contraseña;
    } catch(err) {
        toAppendEmail.textContent = `Por favor, ingrese un email correcto.`;
    }
}

function validationLogin(){
    let formLogin = document.getElementById('form-login');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    console.log(formLogin);

    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();
        let passwordFetch = await f(email.value);
        if(!formLogin.checkValidity() || passwordFetch != password.value){
            event.stopPropagation();
            console.log('invalidado');
            toAppendPassword.textContent = `Por favor, ingrese una contraseña correcta.`;
        } else {
            console.log('validado');
            window.location.href = "index.html";
        }
    });
}


validationLogin();



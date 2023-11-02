async function f() {
    try {
        let response =  await fetch('http://localhost:3000/users/1');
        let user = await response.json();
        console.log(user)
        validationLogin(user);
    } catch(err) {
        console.log(err)
    }
}

function validationLogin(user){
    let formLogin = document.getElementById('form-login')
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    console.log(formLogin);

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        if(!formLogin.checkValidity() || email.value != user.email || password.value != user.contraseña){
            event.stopPropagation();
            console.log('invalidado');
        } else {
            console.log('validado');
            // window.location.href = "index.html";
        }
        formLogin.classList.add("was-validated");
    });
}



f();
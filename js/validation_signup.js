function validationSignup(){
    let formSignup = document.getElementById('form-signup');
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');

    formSignup.addEventListener('submit', (event) => {
        event.preventDefault();
        if(!formSignup.checkValidity() || password1.value.length < 6 || password1.value != password2.value){
            event.stopPropagation();
            console.log('invalidado');
        } else {
            console.log('validado');
            createUser(formSignup);
            // window.location.href = "index.html";
        }
        formSignup.classList.add("was-validated");
    });
}

validationSignup();

function createUser(formSignup){
    let userArray = [];
    for (let i=0 ; i < formSignup.length ; i++) {
        if (formSignup[i].name !== "" && formSignup[i].value !== ""){
            userArray.push([formSignup[i].name, formSignup[i].value]);
        }
    }
    const userObject = Object.fromEntries(userArray);
    console.log(userObject);
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userObject),
    });
}
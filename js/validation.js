function validation() {
    let forms = document.querySelectorAll('.need-validation');
    console.log(forms);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {            
            event.preventDefault()
            if (!form.checkValidity()){
                event.stopPropagation()
                console.log('invalidado')
            } else {
                createJson(form);
            }
            console.log('validado');
            form.classList.add("was-validated");
        })
    })
}

function createJson(form){
    let presupArray = [];
    for (let i=0 ; i < form.length ; i++) {
        if (form[i].name !== "" && form[i].value !== ""){
            presupArray.push([form[i].name, form[i].value]);
        }
    }
    const presupObject = Object.fromEntries(presupArray);
    console.log(presupObject);
    fetch("http://localhost:3000/trabajos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(presupObject),
    });
}

validation();
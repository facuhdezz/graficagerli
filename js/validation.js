function validation() {
    let forms = document.querySelectorAll('.need-validation');
    console.log(forms);

    forms.forEach((form) => {
        form.addEventListener('submit', () => {
            if (!form.checkValidity()){
                event.preventDefault()
                event.stopPropagation()
                console.log('invalidado')
            }        
            console.log('validado');
            form.classList.add("was-validated");
        })
    })
}

validation();
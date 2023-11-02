
/* FUNCION PARA VALIDAR FORMULARIO DE PRESUPUESTO */
function validationPresup() {
    let forms = document.querySelectorAll('.presup-form');
    console.log(forms);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {            
            event.preventDefault();
            if (!form.checkValidity()){
                event.stopPropagation()
                console.log('invalidado')
            } else {
                createPresup(form);
                console.log('validado');
            }
            form.classList.add("was-validated");
        })
    })
}


/* FUNCION QUE CREA UN OBJETO CON LOS DATOS DEL FORMULARIO DE PRESUPUESTO, SE EJECUTA EN validation() */
function createPresup(form){
    let presupArray = [];
    for (let i=0 ; i < form.length ; i++) {
        if (form[i].name !== "" && form[i].value !== ""){
            presupArray.push([form[i].name, form[i].value]);
        }
    }
    const presupObject = Object.fromEntries(presupArray);
    console.log(presupObject);
    console.log(presupObject.trabajo);
    fetch(`http://localhost:3000/${presupObject.trabajo}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(presupObject),
    });
}

validationPresup();


/* FUNCION QUE TRAE LOS DATOS DEL SERVIDOR */
async function f() {
    try {
        let response = await fetch("http://localhost:3000/boletas");
        let trabajos = await response.json();
        console.log(trabajos);
    } catch(err) {
        console.log(err);
    }
}

f()
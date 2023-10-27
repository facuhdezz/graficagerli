const tarjetas = document.getElementById('btnTarjetas');
const boletas = document.getElementById('btnBoletas');
const volantes = document.getElementById('btnVolantes');
const adhesivos = document.getElementById('btnAdhesivos');
const impresiones = document.getElementById('btnImpresiones');
const otros = document.getElementById('btnOtros');
const todosLosElementos = [tarjetas,boletas,volantes,adhesivos,impresiones,otros];
const listGroup = document.getElementsByClassName('list-group-item');
const lista = document.getElementById('list-group');
const tipoDeTrabajo = document.getElementById('tipoDeTrabajo');
const btnCollapseOptions = document.getElementById('btnCollapseOptions');

const appendForm = document.getElementsByClassName('toAppendForm');

btnCollapseOptions.addEventListener('click', () => {
    lista.classList.toggle('d-none');
    lista.addEventListener('click', () => {
        lista.classList.add('d-none');
    })
});

console.log(listGroup);
function llamador(){   

    let htmlToForm = `
    <div class="form-floating mb-3">
        <input type="text" class="form-control w-100" required placeholder="Nombre">
        <label for="floatingInput">Nombre *</label>
        <div class="invalid-feedback">
            Por favor, ingrese un nombre.
        </div>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control w-100" required placeholder="Nombre">
        <label for="floatingInput">Teléfono / Celular *</label>
        <div class="invalid-feedback">
            Por favor, ingrese un número de contacto.
        </div>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control w-100" placeholder="Nombre">
        <label for="floatingInput">Empresa</label>
    </div>
    <div class="form-floating mb-3">
        <input type="email" class="form-control w-100" required placeholder="email">
        <label for="floatingInput">Email *</label>
        <div class="invalid-feedback">
            Por favor, ingrese un email correcto.
        </div>
    </div>
    `

    for (let i=0 ; i < listGroup.length ; i++){
        appendForm[i].innerHTML = htmlToForm;
        let idElement = listGroup[i].id;
        let elemento = document.getElementById(idElement);
        elemento.addEventListener('click', () => {
            tipoDeTrabajo.innerHTML = elemento.id.slice(3);
            todosLosElementos.forEach((element) => {
                document.getElementById(element.id + "div").classList.add('d-none');
                element.classList.remove('active');                                
            });
            elemento.classList.add('active');
            document.getElementById(elemento.id + "div").classList.remove('d-none');
        });
    }
}

llamador();



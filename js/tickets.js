const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i=0;i<listaNodos.length;i++) {
        listaNodos[i].classList.remove("is-invalid");
    } 
}

const validarCorreo = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

const enviar = () => {
    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (correo.value === "" || !validarCorreo(correo.value)) {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if (imagen.value === "") {
        imagen.classList.add("is-invalid");
        imagen.focus();
        return;
    }
}

btnResumen.addEventListener("click", enviar);

const resetEnviar = () => {
    quitarClaseError();
    totalPago.innerHTML = "";
}

 btnBorrar.addEventListener("click", resetEnviar);

 
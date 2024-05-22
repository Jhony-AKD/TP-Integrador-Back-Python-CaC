const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i=0; i<listaNodos.length; i++) {
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
        return false;
    }

    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        apellido.focus();
        return false;
    }

    if (correo.value === "" || !validarCorreo(correo.value)) {
        correo.classList.add("is-invalid");
        correo.focus();
        return false;
    }

    if (imagen.value === "") {
        imagen.classList.add("is-invalid");
        imagen.focus();
        return false;
    }

    // Si todos los campos están completos, el formulario se envía
    return true;
}

btnResumen.addEventListener("click", (event) => {
    // Verificar antes de enviar el formulario
    if (!enviar()) {
        event.preventDefault(); // Evitar que el formulario se envíe
    }
});

const resetEnviar = () => {
    quitarClaseError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener("click", resetEnviar);

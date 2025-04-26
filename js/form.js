const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const email = document.getElementById('correo').value
    const password = document.getElementById('password').value
   
    const errorNombre = document.getElementById('errorNombre');
    const errorEdad = document.getElementById('errorEdad');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');
    const mensaje = document.getElementById('mensaje');

    const datoNombre = document.getElementById('datoNombre');
    const datoEdad = document.getElementById('datoEdad');
    const datoEmail = document.getElementById('datoEmail');

    errorNombre.innerText = '';
    errorEdad.innerText = '';
    errorCorreo.innerText = '';
    errorPassword.innerText = '';
    mensaje.innerText = '';
    datoNombre.textContent = '';
    datoEdad.textContent = '';
    datoEmail.textContent = '';


    function mostrarError(errorElemento, mensaje) {
        errorElemento.textContent = mensaje;
        errorElemento.style.color = 'red';
        errorElemento.style.fontWeight = 'bold';
        errorElemento.style.fontSize = '15px';
    }
    var hayError = false

    if (nombre === '') {
        mostrarError(errorNombre, 'El nombre de usuario es requerido');
        hayError = true;
    }

    if (edad < 18 || edad === null) {
        mostrarError(errorEdad, 'La edad debe ser mayor o igual a 18');
        hayError = true;
    }

    if (email === '') {
        mostrarError(errorCorreo, 'El correo debe ser formato válido');
        hayError = true;
    }

    if (password.length < 6) {
        mostrarError(errorPassword, 'La contraseña debe tener al menos 6 caracteres');
        hayError = true;
    }

    if (!hayError) {
        mensaje.innerText = `🎉 ¡Registro exitoso! Bienvenido, ${nombre}.`;
        mensaje.style.color = 'green';
        datoNombre.textContent = `Nombre: ${nombre}`;
        datoEdad.textContent = `Edad: ${edad}`;
        datoEmail.textContent = `Email: ${email}`;
        form.reset();
    }
});
  
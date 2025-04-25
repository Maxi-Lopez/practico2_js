const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const email = document.getElementById('correo').value
    const password = document.getElementById('password').value
   
    const errorNombre = document.getElementById("errorUsuario")
    
    if (nombre === '') {
        errorNombre.innerText = 'El nombre de usuario es requerido'
        errorNombre.style.color = 'red'
        errorNombre.style.fontWeight = 'bold'
        errorNombre.style.fontSize = '15px'
        document.getElementById("mensaje").innerText = ''
    } else if (edad < 18) {
        document.getElementById("errorEdad").innerText = 'La edad debe ser mayor a 18'
        document.getElementById("mensaje").innerText = ''
    } else if (email === ''){
        document.getElementById("errorCorreo").innerText = 'El email es requerido'
        document.getElementById("mensaje").innerText = ''

    } else if (password <=6){
        document.getElementById("errorConstraseña").innerText = 'La contraseña debe ser mayor de seis caracteres'
        document.getElementById("mensaje").innerText = ''
        
    }
    else {
        document.getElementById("errorNombre").innerText = ''
        document.getElementById("errorEdad").innerText = 0
        document.getElementById("errorCorreo").innerText = ''
        document.getElementById("mensaje").innerText = `Bienvenido ${usuario}`
    }
    

})
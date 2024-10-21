let index = 0;

// Función para cambiar la imagen del carrusel
function cambiarImagen(n) {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    index += n;

    if (index >= imagenes.length) {
        index = 0;
    } 
    if (index < 0) {
        index = imagenes.length - 1;
    }

    const desplazamiento = -index * 100; // Cambiar a porcentaje
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${desplazamiento}vw)`; // Usar vw para el desplazamiento
}

// Cambiar imagen automáticamente cada 5 segundos
setInterval(() => cambiarImagen(1), 5000);

// Referencias a los elementos
const form = document.querySelector('form');
const modal = document.getElementById('modalDatos');
const closeModal = document.getElementById('closeModal');
const contenidoModal = document.getElementById('contenidoModal');
let clics = parseInt(localStorage.getItem('clics')) || 0; // Recuperar clics previos

// Evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío normal del formulario

    // Incrementar y guardar el contador de clics
    clics++;
    localStorage.setItem('clics', clics);
    contadorClicks.textContent = `Número de clics en enviar: ${clics}`;

    // Obtener los datos ingresados
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Mostrar los datos en el modal
    contenidoModal.innerHTML = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Mensaje:</strong> ${mensaje}
    `;
    modal.style.display = 'block'; // Mostrar el modal

    // Guardar los datos en LocalStorage
    const datosFormulario = { nombre, email, mensaje };
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

    // Reiniciar el formulario
    form.reset();
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Evento para descargar los datos como archivo .txt
descargarBtn.addEventListener('click', () => {
    const datosGuardados = localStorage.getItem('datosFormulario');
    if (!datosGuardados) {
        alert('No hay datos para descargar.');
        return;
    }

    const blob = new Blob([datosGuardados], { type: 'text/plain' });
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = URL.createObjectURL(blob);
    enlaceDescarga.download = 'datos_formulario.txt';
    enlaceDescarga.click();
});


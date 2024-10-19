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

// Formulario de Contacto
const enviarBtn = document.getElementById('enviarBtn');
const contadorClicks = document.getElementById('contadorClicks');
const form = document.getElementById('formContacto');
const descargarBtn = document.getElementById('descargarBtn');

// Inicializar contador de clics
let clics = localStorage.getItem('clics') ? parseInt(localStorage.getItem('clics')) : 0;
contadorClicks.textContent = `Número de clics en enviar: ${clics}`;

// Evento de envío del formulario de contacto
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

    // Mostrar los datos en una ventana emergente
    alert(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);

    // Guardar los datos en LocalStorage
    const datosFormulario = { nombre, email, mensaje };
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

    // Reiniciar el formulario
    form.reset();
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

// Función para cambiar el color de fondo del encabezado y del pie de página
function cambiarColorFondo() {
    const color = document.getElementById('colorPicker').value; // Obtener el color seleccionado
    document.querySelector('header').style.backgroundColor = color; // Cambiar color de fondo del encabezado
    document.querySelector('footer').style.backgroundColor = color; // Cambiar color de fondo del pie de página
}

// Evento para detectar cambios en el selector de color
document.getElementById('colorPicker').addEventListener('input', cambiarColorFondo);

// Aplicar el color seleccionado al cargar la página
window.onload = () => {
    const colorGuardado = localStorage.getItem('colorFondo');
    if (colorGuardado) {
        document.querySelector('header').style.backgroundColor = colorGuardado;
        document.querySelector('footer').style.backgroundColor = colorGuardado;
        document.getElementById('colorPicker').value = colorGuardado; // Actualizar el selector
    }
};

// Guardar el color seleccionado en localStorage
document.getElementById('colorPicker').addEventListener('input', (e) => {
    localStorage.setItem('colorFondo', e.target.value);
});

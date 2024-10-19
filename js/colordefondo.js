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

// Inicializar contador de clics
let clics = localStorage.getItem('clics') ? parseInt(localStorage.getItem('clics')) : 0;
const contadorClicks = document.getElementById('contadorClicks');
contadorClicks.textContent = `Número de clics en enviar: ${clics}`;

// Obtener elementos del formulario
const formRegistro = document.getElementById('formRegistro');
const descargarBtnRegistro = document.getElementById('descargarBtnRegistro');

// Evento de envío del formulario de registro
formRegistro.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío normal del formulario

    // Incrementar y guardar el contador de clics
    clics++;
    localStorage.setItem('clics', clics);
    contadorClicks.textContent = `Número de clics en enviar: ${clics}`;

    // Obtener los datos ingresados
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const generoMasculino = document.getElementById('masculino').checked;
    const generoFemenino = document.getElementById('femenino').checked;

    // Mostrar los datos en una ventana emergente
    alert(`Nombre: ${nombre}\nEmail: ${email}\nGénero: ${generoMasculino ? 'Masculino' : generoFemenino ? 'Femenino' : 'No especificado'}`);

    // Guardar los datos en LocalStorage
    const datosFormulario = { nombre, email, genero: generoMasculino ? 'Masculino' : generoFemenino ? 'Femenino' : 'No especificado' };
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

    // Reiniciar el formulario
    formRegistro.reset();
});

// Evento para descargar los datos como archivo .txt
descargarBtnRegistro.addEventListener('click', () => {
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

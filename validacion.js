const btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click',function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    window.location.href=`mailto:gianballester@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${nombre}%0AEmail%3A${email}%0AMensaje%3A${mensaje}`;
});
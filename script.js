document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces en la página
    var links = document.getElementsByTagName('a');

    // Agregar el evento de clic a todos los enlaces
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            // Verificar si el enlace no tiene un atributo "href" válido
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                event.preventDefault();
                // Redirigir a la página 404.html
                window.location.href = '404.html';
            }
        });
    }

    // Capturar errores de carga de imágenes
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('error', function() {
            // Redirigir a la página 404.html
            window.location.href = '404.html';
        });
    }

    // Capturar errores de carga de scripts
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        scripts[i].addEventListener('error', function() {
            // Redirigir a la página 404.html
            window.location.href = '404.html';
        });
    }
});

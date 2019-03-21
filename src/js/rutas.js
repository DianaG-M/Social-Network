<<<<<<< HEAD
(function (window, document) {
        libreria.getID('vista').enrutar()
                .ruta('/', './vistas/login.html', 'controlador', window.manejador.login)
                //Este es el muro
                .ruta('/muro', './vistas/muro.html', 'controlador', window.manejador.logOut)
                //Este es el perfil
                .ruta('/crear-contacto', './vistas/crear.html', 'firebase', function () {
                        _.getID('crearContacto').noSubmit();
                })


})(window, document);
=======
(function () {
    library.getID('view').redirect().road('/', './views/home.html', null, null)
           .road('/crear-contacto', './views/publication/create.html', null, null)
           .road('/leer-contacto', './views/publication/read.html', null,null)
           .road('/actualizar-contacto', './views/publication/update.html',null,null)
})();
>>>>>>> Fa/rama-prueba

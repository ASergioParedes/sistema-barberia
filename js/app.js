document.addEventListener("DOMContentLoaded", () => {
    // Verificar si el contenedor del mapa existe en la página
    const mapaContenedor = document.getElementById("mapa");

    // Si el contenedor está presente, inicializamos el mapa
    if (mapaContenedor) {
        var map = L.map("mapa").setView([51.505, -0.09], 13);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([51.5, -0.09])
            .addTo(map)
            .bindPopup("Nuestra barberia esta ubicada aquí")
            .openPopup();
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("open");
    });

    document.querySelector(".scroll-down").addEventListener("click", function() {
        const section = document.getElementById("nuestros-servicios");
        if (section) {
            // Aseguramos que la sección existe
            window.scrollTo({
                top: section.offsetTop, // Obtener la posición de la sección
                behavior: "smooth", // Hacer el scroll suave
            });
        }
    });

    document
        .querySelector("#btn-confirmar")
        .addEventListener("click", confirmarCita);

    document
        .getElementById("newsletter-form")
        .addEventListener("submit", function(e) {
            e.preventDefault(); // Evita el envío tradicional del formulario

            const emailInput = document
                .getElementById("email-newsletter")
                .value.trim();

            if (emailInput === "") {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Por favor, ingresa un correo electrónico válido.",
                    confirmButtonText: "Aceptar",
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "¡Suscripción Exitosa!",
                    text: "Gracias por suscribirte a nuestro newsletter. ¡Te mantendremos informado!",
                    confirmButtonText: "Aceptar",
                });

                // Aquí puedes agregar lógica para enviar el correo a tu base de datos
                document.getElementById("newsletter-form").reset(); // Limpia el formulario
            }
        });

    function confirmarCita(e) {
        e.preventDefault();
        const resultado = verificarCampos();

        if (resultado.hayErrores) {
            // Si hay campos vacíos, mostrar qué campos están vacíos con SweetAlert2
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Los siguientes campos están vacíos: ${resultado.camposVacios.join(
          ", "
        )}`,
                confirmButtonText: "Aceptar",
            });
        } else {
            // Si no hay campos vacíos, mostrar un mensaje de éxito con SweetAlert2
            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: `¡Tu cita ha sido confirmada! Te esperamos el ${resultado.fecha} a las ${resultado.hora}.`,
                confirmButtonText: "Aceptar",
            });
            // Aquí puedes ejecutar cualquier acción que desees (por ejemplo, enviar un formulario, etc.)
        }
    }

    function verificarCampos() {
        // Obtener los valores de los campos en el momento de la validación
        const nombre = document.querySelector("#nombre").value;
        const servicio = document.querySelector("#servicio").value;
        const barbero = document.querySelector("#barbero").value;
        const fecha = document.querySelector("#fecha").value;
        const hora = document.querySelector("#hora").value;
        const contacto = document.querySelector("#contacto").value;

        const campos = {
            nombre: nombre,
            servicio: servicio,
            barbero: barbero,
            fecha: fecha,
            hora: hora,
            contacto: contacto,
        };

        const camposVacios = [];

        // Iterar sobre las propiedades del objeto
        for (const campo in campos) {
            // Verificar si el valor está vacío
            if (!campos[campo]) {
                camposVacios.push(campo); // Almacena el nombre del campo vacío
            }
        }

        if (camposVacios.length > 0) {
            // Si hay campos vacíos, devolver los campos vacíos
            return { hayErrores: true, camposVacios: camposVacios };
        } else {
            // Si no hay campos vacíos, indicar que no hay errores
            return { hayErrores: false, fecha: fecha, hora: hora };
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-hamburguesa");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});
function inicializarGraficos() {
    // Datos para el gráfico de ingresos generados card(1)
    const ctx = document.getElementById("ingresos-chart").getContext("2d");

    const ingresosChart = new Chart(ctx, {
        type: "bar", // Tipo de gráfico (barras)
        data: {
            labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"], // Etiquetas de las barras (semanas)
            datasets: [{
                label: "Ingresos Generados",
                data: [120000, 150000, 180000, 110000], // Datos de ingresos por semana
                backgroundColor: [
                    "rgba(54, 162, 235, 0.6)", // Azul (Semana 1)
                    "rgba(75, 192, 192, 0.6)", // Verde (Semana 2)
                    "rgba(54, 162, 235, 0.6)", // Azul (Semana 3)
                    "rgba(75, 192, 192, 0.6)", // Verde (Semana 4)
                ],
                borderColor: [
                    "rgba(54, 162, 235, 1)", // Azul
                    "rgba(75, 192, 192, 1)", // Verde
                    "rgba(54, 162, 235, 1)", // Azul
                    "rgba(75, 192, 192, 1)", // Verde
                ],
                borderWidth: 1,
            }, ],
        },
        options: {
            responsive: true, // Hacer que el gráfico sea responsivo
            scales: {
                x: {
                    beginAtZero: true, // Empieza el gráfico en 0
                },
                y: {
                    beginAtZero: true, // Empieza el gráfico en 0
                },
            },
        },
    });

    //* Grafico para card(2), servicios mas solicitados
    const serviciosCtx = document
        .getElementById("servicios-solicitados")
        .getContext("2d");

    const data = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"], // Meses
        datasets: [{
                label: "Corte de Pelo",
                data: [120, 140, 150, 130, 160, 170], // Solicitudes por mes
                borderColor: "rgba(75, 192, 192, 1)", // Verde azulado
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0.4,
                fill: false, // No relleno bajo la línea
            },
            {
                label: "Tintura",
                data: [80, 100, 90, 110, 95, 105],
                borderColor: "rgba(255, 99, 132, 1)", // Rosa
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2,
                tension: 0.4,
                fill: false,
            },
            {
                label: "Secado",
                data: [70, 85, 75, 80, 85, 90],
                borderColor: "rgba(54, 162, 235, 1)", // Azul
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderWidth: 2,
                tension: 0.4,
                fill: false,
            },
            {
                label: "Alisado",
                data: [50, 60, 55, 70, 65, 75],
                borderColor: "rgba(255, 206, 86, 1)", // Amarillo
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                borderWidth: 2,
                tension: 0.4,
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom", // Posición de la leyenda
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return ` ${context.dataset.label}: ${context.raw} solicitudes`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Meses", // Título del eje X
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Número de Solicitudes", // Título del eje Y
                },
            },
        },
    };

    new Chart(serviciosCtx, {
        type: "line", // Gráfico de líneas
        data: data,
        options: options,
    });

    // Gráficos de la card (3) total de citas
    const data1 = {
        labels: ["Citas Cumplidas", "Citas Canceladas"],
        datasets: [{
            label: "Total de Citas",
            data: [70, 30], // Ajusta estos valores según tus datos reales
            backgroundColor: ["#36a2eb", "#ff6384"],
            hoverOffset: 4,
        }, ],
    };

    const config = {
        type: "doughnut", // Tipo de gráfico: rosquilla
        data: data1,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "right", // Cambiado a 'right' para que esté al costado
                    align: "center", // Centrado verticalmente en relación con el gráfico
                    labels: {
                        boxWidth: 20, // Ajusta el tamaño del cuadradito de color
                        padding: 15, // Espaciado entre el gráfico y las etiquetas
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            // Muestra el número de citas en lugar del porcentaje
                            const label = tooltipItem.label || "";
                            const value = tooltipItem.raw;
                            return label + ": " + value + " citas";
                        },
                    },
                },
            },
        },
    };

    // Crear el gráfico en el canvas con id 'total-cita'
    var totalCitasChart = new Chart(
        document.getElementById("total-cita"),
        config
    );

    //*card(4), graficos para la opiniones de clietes
    const dataOpiniones = {
        labels: ["Excelente", "Bueno", "Regular", "Malo"],
        datasets: [{
            label: "Opiniones de Clientes",
            data: [40, 30, 20, 10], // Ajusta estos valores según tus datos reales
            backgroundColor: [
                "#4caf50", // Verde para 'Excelente'
                "#2196f3", // Azul para 'Bueno'
                "#ff9800", // Naranja para 'Regular'
                "#f44336", // Rojo para 'Malo'
            ],
            borderColor: [
                "#388e3c", // Borde para 'Excelente'
                "#1976d2", // Borde para 'Bueno'
                "#f57c00", // Borde para 'Regular'
                "#d32f2f", // Borde para 'Malo'
            ],
            borderWidth: 1, // Ancho del borde de las barras
        }, ],
    };

    // Configuración del gráfico
    const configOpiniones = {
        type: "bar", // Tipo de gráfico: barras
        data: dataOpiniones,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true, // Muestra la leyenda
                    position: "top", // Posición de la leyenda
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            // Muestra los valores en el tooltip
                            const value = tooltipItem.raw;
                            return tooltipItem.label + ": " + value + " opiniones";
                        },
                    },
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Categorías",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Cantidad de Opiniones",
                    },
                    beginAtZero: true, // Comienza el eje Y desde 0
                },
            },
        },
    };

    // Crear el gráfico en el canvas con id 'opiniones'
    const opinionesChart = new Chart(
        document.getElementById("opiniones"),
        configOpiniones
    );

    //* card(6), horas picos de citas
    const data2 = {
        labels: [
            "8:00 AM",
            "10:00 AM",
            "12:00 PM",
            "2:00 PM",
            "4:00 PM",
            "6:00 PM",
            "8:00 PM",
        ],
        datasets: [{
                label: "Citas de Servicios Básicos",
                data: [5, 10, 15, 20, 25, 30, 35],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                fill: true,
            },
            {
                label: "Citas de Estilismo",
                data: [3, 6, 9, 12, 18, 24, 30],
                backgroundColor: "rgba(255, 159, 64, 0.5)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 1,
                fill: true,
            },
            {
                label: "Citas de Tratamientos Especiales",
                data: [2, 4, 8, 12, 16, 20, 25],
                backgroundColor: "rgba(153, 102, 255, 0.5)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
                fill: true,
            },
        ],
    };

    // Configuración del gráfico
    const config2 = {
        type: "line",
        data: data2,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                tooltip: {
                    enabled: true,
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Horas del Día",
                    },
                },
                y: {
                    stacked: true, // Apilado en el eje Y
                    title: {
                        display: true,
                        text: "Número de Citas",
                    },
                },
            },
            interaction: {
                mode: "index",
                intersect: false,
            },
        },
    };

    // Renderiza el gráfico
    const ctx2 = document.getElementById("hora-pico").getContext("2d");
    new Chart(ctx2, config2);

    //* card(5), clientes frecuentes
    const data3 = {
        labels: ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E"], // Nombres de los clientes
        datasets: [{
            label: "Número de Citas",
            data: [15, 20, 12, 18, 25], // Cantidad de citas de cada cliente
            backgroundColor: "rgba(153, 102, 255, 0.2)", // Relleno debajo de la línea (tono morado claro)
            borderColor: "rgba(153, 102, 255, 1)", // Color de la línea (tono morado oscuro)
            borderWidth: 2,
            tension: 0.3, // Curvatura de la línea
            fill: true, // Activar el relleno bajo la línea
        }, ],
    };

    // Configuración del gráfico
    const config3 = {
        type: "line",
        data: data3,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top", // Posición de la leyenda
                },
                tooltip: {
                    enabled: true, // Habilitar tooltips
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Clientes", // Título del eje X
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Cantidad de Citas", // Título del eje Y
                    },
                    beginAtZero: true, // Iniciar el eje Y desde 0
                },
            },
        },
    };

    // Renderiza el gráfico
    const ctx3 = document.getElementById("clientes-frecuentes").getContext("2d");
    new Chart(ctx3, config3);

    //* card(7), ingresos diarios por barbero
    // Obtén el contexto del canvas donde dibujarás el gráfico
    var canvasContext = document
        .getElementById("ingresos-diarios")
        .getContext("2d");

    // Datos del gráfico (ingresos por barbero)
    var datosGrafico = {
        labels: [
            "Juan",
            "Carlos",
            "Sofía",
            "María",
            "Pedro",
            "Ana",
            "Luis",
            "Miguel",
        ], // Nombres de los 8 barberos
        datasets: [{
            label: "Ingresos por Barbero",
            data: [12000, 15000, 20000, 10000, 18000, 25000, 21000, 17000], // Ingresos de cada barbero
            backgroundColor: "rgba(75, 192, 192, 0.8)", // Color de las barras
            borderColor: "rgba(75, 192, 192, 1)", // Color de los bordes de las barras
            borderWidth: 2, // Grosor del borde de las barras
        }, ],
    };

    // Opciones de configuración para el gráfico
    var opcionesGrafico = {
        type: "bar", // Tipo de gráfico: barra (horizontal)
        data: datosGrafico,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top", // Posición de la leyenda
                },
                tooltip: {
                    enabled: true, // Activar tooltips para mostrar el monto exacto
                    callbacks: {
                        label: function(tooltipItem) {
                            return `$${tooltipItem.raw}`; // Formatear el monto con el signo de dólar
                        },
                    },
                },
            },
            indexAxis: "x", // Esto cambia el gráfico a horizontal (horizontal bar chart)
            scales: {
                x: {
                    beginAtZero: true, // Asegura que el gráfico empiece desde 0 en el eje X (ahora eje horizontal)
                    title: {
                        display: true,
                        text: "Ingresos ($)", // Título del eje X
                    },
                },
                y: {
                    beginAtZero: true, // Asegura que el gráfico empiece desde 0 en el eje Y (ahora eje vertical)
                    title: {
                        display: true,
                        text: "Barbero", // Título del eje Y
                    },
                },
            },
        },
    };

    // Crea el gráfico
    var graficoIngresos = new Chart(canvasContext, opcionesGrafico);
}

document.addEventListener("DOMContentLoaded", function() {
    inicializarGraficos();
});
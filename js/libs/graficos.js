// Datos para el gráfico
const ctx = document.getElementById("ingresos-chart").getContext("2d");

const ingresosChart = new Chart(ctx, {
    type: "bar", // Tipo de gráfico (barras)
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"], // Etiquetas de las barras (semanas)
        datasets: [{
            label: "Ingresos Generados",
            data: [1200, 1500, 1800, 1100], // Datos de ingresos por semana
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
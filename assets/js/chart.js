<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D', 'Categoría E', 'Categoría F'],
            datasets: [{
                data: [30, 20, 15, 10, 15, 10],
                backgroundColor: [
                    '#FF6384', // Rojo
                    '#36A2EB', // Azul
                    '#FFCE56', // Amarillo
                    '#4BC0C0', // Verde
                    '#9966FF', // Morado
                    '#FF9F40'  // Naranja
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Distribución de Categorías'
                }
            }
        }
    });

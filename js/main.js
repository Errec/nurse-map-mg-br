var barChartData = {
    labels: ["Total", "Enfermeiros", "Tecnicos", "Auxiliares"],
    datasets: [{
        label: 'Região',
        backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        data: [0, 0, 0, 0]
    }, {
        label: 'Estado',
        backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
        data: [regionData.totalProfissionais, regionData.totalEfenfermeiros, regionData.totalTecnicos, regionData.totalAuxiliares]
    }]

};
window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title:{
                display:false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: false
                }]
            }
        }
    });
};

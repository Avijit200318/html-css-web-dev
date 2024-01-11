// Sample data for the bar chart
var data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [{
        label: 'Sample Data',
        data: [25, 50, 75, 100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
    }]
};

// Chart configuration
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Get the canvas element
var ctx = document.getElementById('barchart').getContext('2d');

// Create the bar chart
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
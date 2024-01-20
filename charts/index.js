// graph
const ctx = document.getElementById("barchart").getContext('2d');

const labels = [
    '20',
    ' ',
    '25',
    ' ',
    '30',
    ' ',
    '35',
    ' ',
    '40',
    ' ',
    '60',
    ' ',
    '65',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'Employee',
      data: [50, 75, 100, 128, 142, 156 ,170, 184, 222, 244, 266, 288, 300],
      backgroundColor: [
        // First half of the bar
        'rgb(0, 0, 204)',
        // Second half of the bar
      ],
      borderColor: [
        // Border color for the first half of the bar
        'rgb(255, 99, 132)',
        // Border color for the second half of the bar
      ],
      borderWidth: 1,
      borderSkipped: 'bottom', // Adjust this property to control the spacing
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value, index, values) {
              return value + 'm'; // Append 'm' to the tick label
            }
          }
        }
      }
    },
};

const myChart = new Chart(ctx, config);

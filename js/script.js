AOS.init();

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    infinite: true,
    pauseOnHover: true,
    arrows: false,
    dots: false
  });
});


  let ctx = document.getElementById('myBarChart').getContext('2d');

  let labelColor = [
    '#E34F26',
    '#1572B6',
    '#7952B3',
    '#06B6D4',
    '#F7DF1E',
    '#0769AD',
    '#61DAFB'
  ]

  let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS','Bootstrap', 'Tailwind', 'JavaScript', 'jQuery', 'React'],
      datasets: [{
        label: 'Skill Level (%)',
        data: [90, 80, 65, 20, 60, 10, 5],
        backgroundColor: [
          '#E34F26',
          '#1572B6',
          '#7952B3',
          '#06B6D4',
          '#F7DF1E',
          '#0769AD',
          '#61DAFB'
        ]
      }]
    },
    options: {
      scales: {
        x: {
          ticks: {
            color: function (context) {
              return labelColor [context.index]
            },
            font: {
              family: 'Electrolize',
              size: 14,
              weight: 'bold'
            }
          }
        },
        y: {
          ticks: {
            color: '#5FE3FF',
            font: {
              family: 'Iceberg',
              size: 14
            }
          }
        }
      }
    },
  }
);

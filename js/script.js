$(document).ready(function() {
  console.log("hello");

  function chart1() {
      var ctx = document.getElementById("chart1").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          backgroundColor: "rgb(240,244,253)",
          borderColor: "rgb(129,168,219)",
          data: [2, 1, 3, 2, 4,]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend:{
        display: false
      },
      layout: {
        padding: {
            bottom: -10
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false,
              drawTicks: false,
              tickMarkLength: 0
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  });
  }

   function chart2() {
      var ctx = document.getElementById("chart2").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          backgroundColor: "rgb(239,251,249)",
          borderColor: "rgb(91,188,156)",
          data: [4, 2, 3, 2, 1,]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend:{
        display: false
      },
      layout: {
        padding: {
            bottom: -10
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false,
              drawTicks: false,
              tickMarkLength: 0
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  });
  }

   function chart3() {
      var ctx = document.getElementById("chart3").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          backgroundColor: "rgb(249,242,255)",
          borderColor: "rgb(182,114,194)",
          data: [1, 2, 3, 2, 4,]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend:{
        display: false
      },
      layout: {
        padding: {
            bottom: -10
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
              display: false,
              drawTicks: false,
              tickMarkLength: 0
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  });
  }

  function toggler (elem, elem2, elem3) {
    elem.click(() => {
      elem2.toggleClass('close');
      elem3.toggleClass('fullwidth');
    })
  }

  function togglerMobile (elem, elem2) {
    elem.click(() => {
      if ($(document).width() < 901) {
        elem2.css('display', 'block')
        elem2.removeClass('close')
      }
    })
  }
  function closeMobile (elem, elem2) {
    elem.click(() => {
      if ($(document).width() < 901) {
        elem2.css('display', 'none')
        elem2.addClass('close')
      }
    })
  }

toggler($('.hamburger',), $('.sidenav'), $('.main'))
togglerMobile($('.hamburger',), $('.sidenav'))
closeMobile($('.close-mobile',), $('.sidenav'))
chart1();
chart2();
chart3();
});

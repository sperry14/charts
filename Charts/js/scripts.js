
$( document ).ready(function() {
  createCharts();
});


// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//       columns: [
//         ['passing', 161, 274, 406, 225, 262],
//         ['rushing', 72, 151, 108, 115, 167]
//         ['points', 21, 28, 27, 27, 30]
//       ],
//       axes: {
//         data2: 'y2'
//       },
//       types: {
//         data1: 'bar',
//         data2: 'bar'
//       }
//     },
//     axis: {
//       y: {
//         label: {
//           text: 'Points',
//           position: 'outer-middle'
//         }
//       },
//       y2: {
//         show: true,
//         label: {
//           text: 'Yards',
//           position: 'outer-middle'
//         }
//       }
//     }
// });


var offensiveYards = c3.generate({
  bindto: '#offensive-yards',
    data: {
        columns: [
          ['points', 21, 28, 27, 27, 30],
          ['passing', 161, 274, 406, 225, 262],
          ['rushing', 72, 151, 108, 115, 167]
        ],

        axes: {
          points: 'y2'
          },
        types: {
                passing: 'bar',
                rushing: 'bar'
              },
    },
    axis: {
      y: {
        label: {
          text: 'Total Yards',

        }
      },
      y2: {
        show: true,
        label: {
          text: 'Total Points',

        }
      },
      x: {
          type: 'category',
          categories: ['1', '2', '3', '4','5'],
          label: 'Week'
      }

    }

});

setTimeout(function () {
    offensiveYards.groups([['passing', 'rushing']])
}, 1000);


setTimeout(function () {
    offensiveYards.groups([['passing', 'rushing']])
}, 2000);


var penalty = c3.generate({
    bindto: '#penalty',
    data: {
        columns: [
            ['offense', 71, 127, 67, 115],
            ['penalty', 9, 8, 15, 10]
        ],
        types: {
            offense: 'area-spline',
            penalty: 'area-spline'
            // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },
        groups: [['data1', 'data2']]
    },
    axis: {
      x: {
          type: 'category',
          categories: ['1', '2', '3', '4'],
          label: 'Quarter'
      }

    }

});

var drive = c3.generate({
  bindto: '#drive',
    data: {
        // iris data from R
        columns: [
            ['Punt', 24],
            ['Score', 20],
            ['Turnover', 10]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

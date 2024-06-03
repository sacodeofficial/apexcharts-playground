var options = {
    chart: {
        type: 'bar'
    },
    series: [
        {
            name: 'PNS',
            data: [12], 
        },
        {
            name: 'Non PNS',
            data: [23]
        },
    ], 

    xaxis: {
        categories: [
            '',
        ]
    },
     
    title: {
        text: 'Jumlah Petugas Berdasarkan Status Pegawai',
        align: 'center',
        style: {
            color: undefined,
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-title',
        },
    },

}


// =====================

var options2 = {
    series: [{
    data: [400, 430]
  }],
    chart: {
    type: 'bar',
    // height: 380
  },
  plotOptions: {
    bar: {
      barHeight: '100%',
      horizontal: false,
      dataLabels: {
        position: 'center'
      },
    }
  },
//   colors: ['#33b2df', '#546E7A'],
  dataLabels: {
    enabled: true,
    // textAnchor: 'start',
    style: {
      colors: ['#fff']
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
    },
    offsetX: 0,
    dropShadow: {
    //   enabled: true
    }
  },
  stroke: {
    // width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: ['PNS', 'Non PNS'
    ],
  },
  yaxis: {
    labels: {
      show: false
    }
  },
  title: {
    text: 'Jumlah Petugas Berdasarkan Status Pegawai',
    align: 'center',
    style: {
        color: undefined,
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-title',
    },
},
  tooltip: {
    theme: 'dark',
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return ''
        }
      }
    }
  }
  };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();

var pegawaiStatus = new ApexCharts(document.querySelector("#pegawaiStatus"), options2);

pegawaiStatus.render();
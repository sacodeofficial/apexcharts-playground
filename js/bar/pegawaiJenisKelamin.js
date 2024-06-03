var options = {
    chart: {
        type: 'bar'
    },
    series: [
        {
            name: 'Laki-Laki',
            data: [12], 
        },
        {
            name: 'Perempuan',
            data: [23]
        },
    ], 

    xaxis: {
        categories: [
            '',
        ]
    },
     
    title: {
        text: 'Jumlah Petugas Berdasarkan Jenis Kelamin',
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

var pegawaiJenisKelamin = new ApexCharts(document.querySelector("#pegawaiJenisKelamin"), options);

pegawaiJenisKelamin.render();
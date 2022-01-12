d3.csv('C:\Users\kdmcc\USA-Wildfires-\resources - kdmcc\data\lightingFire.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

 scl = [[0, 'rgb(150,0,90)'],[0.125, 'rgb(0, 0, 200)'],[0.25,'rgb(0, 25, 255)'],[0.375,'rgb(0, 152, 255)'],[0.5,'rgb(44, 255, 150)'],[0.625,'rgb(151, 255, 0)'],[0.75,'rgb(255, 234, 0)'],[0.875,'rgb(255, 111, 0)'],[1,'rgb(255, 0, 0)']];

    var data = [{
        type: 'scattergeo',
        mode: 'markers',
        text: unpack(rows, 'Fire Size'),
        lon: unpack(rows, 'Lng'),
        lat: unpack(rows, 'Lat'),
        marker: {
          color: unpack(rows, 'Fire Size'),
          colorscale: scl,
          cmin: 0,
          cmax: 1.4,
          reversescale: true,
          opacity: 0.2,
          size: 2,
          colorbar:{
            thickness: 10,
            titleside: 'right',
            outlinecolor: 'rgba(68,68,68,0)',
            ticks: 'outside',
            ticklen: 3,
            shoticksuffix: 'last',
            ticksuffix: 'inches',
            dtick: 0.1
          }
        },
        name: 'Fire Size'
    }];

    var layout = {
      geo:{
        scope: 'north america',
        showland: true,
        landcolor: 'rgb(212,212,212)',
        subunitcolor: 'rgb(255,255,255)',
        countrycolor: 'rgb(255,255,255)',
        showlakes: true,
        lakecolor: 'rgb(255,255,255)',
        showsubunits: true,
        showcountries: true,
        resolution: 50,
        projection: {
          type: 'conic conformal',
          rotation: {
            long: -100
          }
        },
      },
      longaxis: {
        showgrid: true,
        gridwidth: 0.5,
        range: [ -140.0, -55.0 ],
        dtick: 5
      },
      lataxis: {
        showgrid: true,
        gridwidth: 0.5,
        range: [ 20.0, 60.0 ],
        dtick: 5
      },
      title: 'Lighting Fires',
      width: 600,
      height: 600
    };

    Plotly.newPlot('fireMap', data, layout);
  });
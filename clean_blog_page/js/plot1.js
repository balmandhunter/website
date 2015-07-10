      function draw(data) {
      
      /*
        D3.js setup code
      */

          "use strict";
          var margin = 75,
              width = 1400 - margin,
              height = 600 - margin;

          d3.select('body')
            .append('h2')
            .text("Sensor Signal as a Function of Time and Temperature");

          var svg = d3.select("#chart")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');

      /*
        Dimple.js Chart construction code
      */

          var myChart = new dimple.chart(svg, data);
          var x = myChart.addTimeAxis("x", "Date","%x %H:%M", "%m/%d"); 
          myChart.addMeasureAxis("y", "Sensor Ozone Signal (1/uV)");
          myChart.addColorAxis("Temperature (C)", ["#313695", "#4575b4", "#f46d43","#d73027" , "#a50026"]);
          var lines = myChart.addSeries(null, dimple.plot.line); 
          lines.lineWeight = 3;
          lines.lineMarkers = 'dimple-custom-line-marker';
          myChart.draw();

        };
function draw3(data) {

/*D3.js setup code*/

    "use strict";

    var margin = 75,
        width = 600 - margin,
        height = 400 - margin;

  d3.select("#chart3_d3")
    .append("h4")
    .text("Inexpensive Sensor Signal Versus time and Ozone Concentration");

    var svg = d3.select("#chart3_d3")
      .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
      .append('g')
          .attr('class','chart');

    /*Dimple.js Chart construction code*/
    var myChart = new dimple.chart(svg, data);
    var x = myChart.addTimeAxis("x", "Date","%x %H:%M", "%m/%d"); 
    myChart.addMeasureAxis("y", "Sensor Ozone Signal (1/uV)");
    myChart.addColorAxis("Reference Ozone Concentration (ppb)", ["#313695", "#4575b4", "#f46d43","#d73027" , "#a50026"]);
    var lines = myChart.addSeries(null, dimple.plot.line); 
    lines.lineWeight = 3;
    lines.lineMarkers = 'dimple-custom-line-marker';
    console.log(myChart.data);
    myChart.draw();

};
d3.csv("/clean_blog_page/js/D0_resamp.csv", draw3);
var gaugeChart = AmCharts.makeChart( "chartdiv", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 20,
    "bands": [ {
      "color": "#84b761",
      "endValue": 90,
      "startValue": 0
    }, {
      "color": "#fdd400",
      "endValue": 130,
      "startValue": 90
    }, {
      "color": "#cc4748",
      "endValue": 220,
      "innerRadius": "95%",
      "startValue": 130
    } ],
    "bottomText": "0 km",
    "bottomTextYOffset": -20,
    "endValue": 220
  } ],
  "arrows": [ {} ]
} );

setInterval( randomValue, 2000 );

// set random value
function randomValue() {
  var value = Math.round( Math.random() * 200 );
  if ( gaugeChart ) {
    if ( gaugeChart.arrows ) {
      if ( gaugeChart.arrows[ 0 ] ) {
        if ( gaugeChart.arrows[ 0 ].setValue ) {
          gaugeChart.arrows[ 0 ].setValue( value );
          gaugeChart.axes[ 0 ].setBottomText( value + " km" );
        }
      }
    }
  }
}
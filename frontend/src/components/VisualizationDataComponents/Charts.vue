<template>
<div id='chartElement'>
    <highcharts class="hc" :options="chartOptions" ref="Charts"></highcharts>
    <div id="syncChart">
    <div id="pumpChart"> </div>
    <div id="qChart"> </div>
    <div id="gwChart"> </div>
    <div id="pdsiChart"> </div>
    </div>
</div>
</template>

    
    
<script>
import $ from 'jquery'
import Highcharts from 'highcharts'

export default {
  
    name: "Charts",
    mounted() {
          document.getElementById('slider').addEventListener("input",

        function(e) {
            var value = e.target.value / e.target.max;
            for (var i = 0; i < Highcharts.charts.length; i++) {
            var chart = Highcharts.charts[i];

            // Get point at rough percentage of chart
            var pointIndex = Math.floor( value * chart.series[0].points.length);

            if( pointIndex >= chart.series[0].points.length ) {
                pointIndex = chart.series[0].points.length - 1;
            } else if( pointIndex <= 0 ) {
                pointIndex = 0;
            }

            var point = chart.series[0].points[pointIndex];

            // Moves tool tip node but not text or vertical line
            point.setState('hover');
            point.state = '';
            chart.tooltip.refresh(chart.series[0].points[pointIndex]);
            }
        }
        );
        
        $(function() {
            /**
             * In order to synchronize tooltips and crosshairs, override the
             * built-in events with handlers defined on the parent element.
             * (Modified from Highcharts API documentation to add indexing)*/
            $('#syncChart>div').bind('mousemove touchmove touchstart', function(e) {
                var chart,
                    point,
                    index, // Indexes data so that the arrays all have the same positions starting at 0, which
                    i, // fixed the problem with the data being misaligned even though the crosshairs were synced.
                    event;
                chart = $(this).highcharts()
                event = chart.pointer.normalize(e.originalEvent);

                //Find events within the charts
                point = chart.series[0].searchPoint(event, true);
                if (point) {
                    index = point.index
                    for (i = 0; i < Highcharts.charts.length; i = i + 1) {
                        chart = Highcharts.charts[i];
                        point = chart.series[0].points[index]
                        if (point) {
                            point.highlight(e);
                        }
                    }
                }
            });

            /**
             * Override the reset function, we don't need to hide the tooltips and crosshairs.
             */
            Highcharts.Pointer.prototype.reset = function() {
                return undefined;
            };

            /**
             * Highlight a point by showing tooltip, setting hover state and draw crosshair
             */
            Highcharts.Point.prototype.highlight = function(event) {
                this.onMouseOver(); // Show the hover marker
                this.series.chart.tooltip.refresh(this); // Show the tooltip
                this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
            };

            /**
             * Synchronize zooming through the setExtremes event handler.
             */
            function syncExtremes(e) {
                var thisChart = this.chart;

                if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
                    Highcharts.each(Highcharts.charts, function(chart) {
                        if (chart !== thisChart) {
                            if (chart.xAxis[0].setExtremes) { // It is null while updating
                                chart.xAxis[0].setExtremes(e.min, e.max, undefined, true, {
                                    trigger: 'syncExtremes'
                                });
                            }
                        }
                    });
                }
            };
            
           

            //
            // PUMP chart
            //
            $.getJSON("Hamilton_WaterUseIrrigateation_AnnualSummary2019.json").done(function(rawData) {
                var data = []
                $.each(rawData, function(index, item) {
                    data.push([Date.UTC(item[0], item[1]), item[2]])
                })
                
                Highcharts.chart('pumpChart', {
                    title: {
                        text: '<b>Irrigation</b>', //'Annual Pumping'
                        margin: 5,
                        style: {
                            fontSize: '14px'
                        }
                    },

                    subtitle: {
                        align: 'center',
                        text: 'Hamilton County (KGS)<br/>',
                        style: {
                            fontSize: '11px'
                        }
                    },
                    
                    subtitle: {
                        useHTML: true,
                        align: 'center',
                        text: '<p style="text-align:center">Hamilton County (KGS)</p>Minimum: 0.91 ft<sup>3</sup>/s&nbsp;&nbsp;&nbsp;&nbsp;Median: 59.98 ft<sup>3</sup>/s&nbsp;&nbsp;&nbsp;&nbsp;Maximum: 99.07 ft<sup>3</sup>/s&nbsp;&nbsp;&nbsp;&nbsp;Mean: 56.63 ft<sup>3</sup>/s',
                        style: {
                            fontSize: '11px'
                        }
                    },
                    
                    credits: {
                        enabled: false
                    },

                    legend: {
                        enabled: false
                    },

                    xAxis: {
                        type: 'datetime',
                        crosshair: true,
                        dateTimeLabelFormats: {
                            year: '%Y'
                        },
                        labels: {
                            style: {
                                fontSize: '12px'
                            }
                        },
                    },

                    yAxis: {
                        title: {
                            text: 'average ft<sup>3</sup>/s',
                            style: {
                                fontSize: '11px'
                            },
                        },
                        labels: {
                            style: {
                                fontSize: '14px'
                            },
                        },
                        max: 120,
                        tickInterval: 40
                    },

                    tooltip: {
                        positioner: function() {
                            return {
                                x: this.chart.chartWidth - this.label.width - 10, // right aligned
                                y: 5
                            };
                            relativeTo: 'pumpChart'
                        },
                        shadow: true,
                        borderWidth: 1,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        pointFormat: '<b>{point.y}</b><br/>',
                        valueSuffix: ' ft<sup>3</sup>/s',
                        valueDecimals: 1,
                        padding: 4
                    },

                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false,
                                states: {
                                    hover: {
                                        lineWidthPlus: 0,
                                        fillColor: null
                                    }
                                }
                            }
                        },
                        followPointer: true
                    },

                    series: [{
                        name: '(ft<sup>3</sup>/s)',
                        data: data,
                        lineWidth: 1,
                        color: '#99791a'  // brown
                    }],

                });
            })
            

            //
            // Q chart
            //
            $.getJSON("7138000_Syracuse_Qmo.json").done(function(rawData) {
                var data = []
                $.each(rawData, function(index, item) {
                    data.push([Date.UTC(item[0], item[1]), item[2]])
                })

                Highcharts.chart('qChart', {
                    title: {
                        text: '<b>Streamflow</b>', //'Monthly Streamflow'
                        margin: 5,
                        style: {
                            fontSize: '14px'
                        }
                    },

                    subtitle: {
                        useHTML: true,
                        align: 'center',
                        text: '<p style="text-align:center">Syracuse Gage Station (USGS)</p>Minimum: 0.038 ft<sup>3</sup>/s &nbsp;&nbsp;&nbsp;&nbsp;Median: 129.00 ft<sup>3</sup>/s&nbsp;&nbsp;&nbsp;&nbsp;Maximum: 8057.00 ft<sup>3</sup>/s&nbsp;&nbsp;&nbsp;&nbsp;Mean: 199.67 ft<sup>3</sup>/s',
                        style: {
                            fontSize: '11px'
                        }
                    },
                    
                    credits: {
                        enabled: false
                    },

                    legend: {
                        enabled: false
                    },

                    xAxis: {
                        type: 'datetime',
                        crosshair: true,
                        dateTimeLabelFormats: {
                            year: '%Y'
                        },
                        labels: {
                            style: {
                                fontSize: '12px'
                            }
                        },
                    },

                    yAxis: {
                        title: {
                            text: 'average ft<sup>3</sup>/s',
                            style: {
                                fontSize: '11px'
                            },
                        },
                        labels: {
                            style: {
                                fontSize: '14px'
                            }
                        },
                        type: 'logarithmic',
                        max: 10000,
                        tickInterval: 2
                    },

                    tooltip: {
                        positioner: function() {
                            return {
                                x: this.chart.chartWidth - this.label.width - 10, // right aligned
                                y: 5
                            };
                            relativeTo: 'qChart'
                        },
                        shadow: true,
                        borderWidth: 1,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        pointFormat: '<b>{point.y}</b><br/>',
                        valueSuffix: ' ft<sup>3</sup>/s',
                        valueDecimals: 1,
                        padding: 4
                    },

                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false,
                                fillColor: null, //get fill color for marker from series, doesn't work
                                states: {
                                    hover: {
                                        lineWidthPlus: 0,
                                        fillColor: null //get fill color for marker when on mouse hover, doesn't work
                                    }
                                }
                            }
                        },
                        followPointer: true
                    },

                    series: [{
                        name: '(ft<sup>3</sup>/s)',
                        data: data,
                        lineWidth: 1,
                        color: '#0000FF',
                        zones: [{
                            value: 0,         // no flow
                            color: '#000000'
                        }, {
                            value: 16.82,      // <10% flow
                            color: '#c10b0b'  // old #bb0c0c
                        }, {
                            value: 58.5,    // 10-25% flow
                            color: '#f7b709'  // old #f7bf26
                        }, {
                            value: 242.75,   // 25-75% flow
                            color: '#70c11f'  // old #17d30d (neon green),#a4d13c (lime green), #26b71f (green)
                        }, {
                            value: 405.68,    // 75-90% flow
                            color: '#08c6db'  // old #0091FE, #02dbc6 (turquoise blue)
                        }, {
                            value: 519.125,     // > 90% flow
                            color: '#007ad6'  // old #00afd6
                        }, {
                            color: '#090b86'   // very high flow
                        }]

                    }],

                });
            })

            //
            // GW chart
            //
            $.getJSON("Hamilton_GW_WinterAvg.json").done(function(rawData) {
                var data = []
                $.each(rawData, function(index, item) {
                    data.push([Date.UTC(item[0], item[1]), item[2]])
                })

                Highcharts.chart('gwChart', {
                    title: {
                        text: '<b>Groundwater Level</b>', //'Annual Groundwater Level',
                        margin: 5,
                        style: {
                            fontSize: '14px'
                        }
                    },
                    
                    subtitle: {
                        useHTML: true,
                        align: 'center',
                        text: '<p style="text-align:center">Hamilton County (KGS)</p>Minimum: 19.9 ft&nbsp;&nbsp;&nbsp;&nbsp;Median: 72.09 ft&nbsp;&nbsp;&nbsp;&nbsp;Maximum: 100.64 ft &nbsp;&nbsp;&nbsp;&nbsp;Mean: 64.14 ft',
                        style: {
                            fontSize: '11px'
                        }
                    },

                    credits: {
                        enabled: false // Disables Highcharts.com stamp at the bottom of each chart. Only appears on the last chart.
                    },

                    legend: {
                        enabled: false
                    },

                  xAxis: {
                    type: 'datetime',
                    crosshair: true,
                    dateTimeLabelFormats: {
                        year: '%Y'
                    },
                    labels: {
                        style: {
                            fontSize: '12px'
                        }
                    },
                  },

                      yAxis: {
                        title: {
                            text: 'average ft',
                            style: {
                                fontSize: '11px'
                            },
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                            },
                        },
                        min: -150,
                        tickInterval: 50
                    },

                    tooltip: {
                        positioner: function() {
                            return {
                                x: this.chart.chartWidth - this.label.width - 10, // right aligned
                                y: 5
                            };
                            relativeTo: 'gwChart'
                        },
                        shadow: true,
                        borderWidth: 1,
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        pointFormat: '<b>{point.y}</b><br/>',
                        valueSuffix: ' ft',
                        valueDecimals: 1,
                        padding: 4
                    },

                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false,
                                fillColor: null, // inheret marker color from series, doesn't work
                                states: {
                                    hover: {
                                        lineWidthPlus: 0,
                                        fillColor: null // inheret marker color from series, doesn't work
                                    }
                                }
                            }
                        },
                        followPointer: true
                    },

                    series: [{
                        name: '(ft)',
                        data: data,
                        lineWidth: 1,
                        color: '#7c2f8e'  // purple
                    }],

                });
            })

            //
            // PDSI chart
            //
            $.getJSON("ClimateDiv7_PDSImo.json").done(function(rawData) {
                var data = []
                $.each(rawData, function(index, item) {
                    data.push([Date.UTC(item[0], item[1]), item[2]])
                })
                
                Highcharts.chart('pdsiChart', { // Begin PDSI chart
                    title: { 
                        text: '<b>Wet/Dry Periods</b>',
                        style: {
                            fontSize: '14px'
                        }
                    },
                   
                    subtitle: {
                        useHTML: true,
                        align: 'center',
                        text: '<p style="text-align:center">KS Climate Div. 7 (NCEI)</p>Minimum: -6.23&nbsp;&nbsp;&nbsp;&nbsp;Median: 0.13&nbsp;&nbsp;&nbsp;&nbsp;Maximum: 5.91 &nbsp;&nbsp;&nbsp;&nbsp;Mean: 0.22',
                        style: {
                            fontSize: '11px'
                        }
                    },
                    
                    legend: {
                        enabled: false // Disables legend because the series are explained by title and axes lables.
                    },

                    xAxis: {
                        type: 'datetime',
                        crosshair: true,
                        dateTimeLabelFormats: {
                            year: '%Y'
                        },
                        title: {
                            text: 'Year',
                            style: {
                                fontSize: '14px'
                            }
                        },
                        labels: {
                            style: {
                                fontSize: '12px'
                            }
                        },
                    },

                    yAxis: { 
                        title: {
                            text: 'Dry (-) |  Wet (+) <br />',
                            style: {
                                fontSize: '11px' 
                            },
                        },
                        labels: {
                            style: {
                                fontSize: '14px'
                            }
                        },
                        min: -6,
                        max: 6,
                        tickInterval: 3
                      },

                      tooltip: {
                          positioner: function() {
                              return {
                                  x: this.chart.chartWidth - this.label.width - 10, // right aligned
                                  y: 5
                              };
                              relativeTo: 'pdsiChart'
                          },
                          shadow: true,
                          borderWidth: 1,
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          pointFormat: '<b>{point.y}</b><br/>',
                          valueDecimals: 1,
                          padding: 4
                      },

                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false,
                                fillColor: null,
                                states: {
                                    hover: {
                                        lineWidthPlus: 0,
                                        fillColor: null // inheret color from series, doesn't work
                                    }
                                }
                            },
                        },
                        followPointer: true
                    },

                    series: [{
                        //id: 'PDSI',
                        type: 'area',
                        name: '(PDSI)',
                        data: data,
                        lineWidth: 1,
                        zones: [{
                            value: 0,
                            color: '#FF6347'  // red
                        }, {
                            color: '#1E90FF'  // blue
                        }],
                    }],
                });
            });   // Call data array for PDSI from JSON file
            //END PDSI chart
        });;
    }
};

</script>
    
    
<style scoped>

#chartElement {
  float: right;
    right: 0;
    width: 40%;
    padding: 15px;
    }
    
#syncChart {
    position: absolute;
    width: 40%;
    right: 0;
    padding: 15px;
    }
    
#qchart {
    width: 40%;
    height: 210px; 
    margin-left: auto; 
    margin-right: auto
    }   
    
#gwchart {
    width: 40%;
    height: 210px;
    margin-left: auto;
    margin-right: auto
    }
    
#pdsichart {
    width: 40%;
    height: 210px;
    margin-left: auto;
    margin-right: auto
    }
    
</style>
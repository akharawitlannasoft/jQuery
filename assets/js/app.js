$(function () { 

    /**
     * Chart #1
     */
    var chart1 = Highcharts.chart('chart1', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Shiping Status'
        },
        xAxis: [{
            categories: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 50,
            floating: true,

        },
        series: [{
            type: 'line',
            name: 'Regression Line',
            data: [[1, 100], [10, 233]],
            color: Highcharts.getOptions().colors[1],
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            zIndex: 1
        }, {
            name: 'Plan (qty)',
            type: 'line',
            data: [100, 200, 100, 100 ,100 ,100 ,100 ,100 ,100 ,100 ,100 ,200],
            marker: {
                enabled: false
            },
            color: Highcharts.getOptions().colors[5],
            zIndex: 1
        }, {
            name: 'Output (qty)',
            type: 'column',
            color: Highcharts.getOptions().colors[0],
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    /**
     * Chart #2
     */
    var chart2 = Highcharts.chart('chart2', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Shiping Status'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, {
            title: {
                text: '%Yield',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Plan (qty)',
            type: 'line',
            data: [300, 200, 100, 300 ,300 ,300 ,300 ,300 ,300 ,300 ,300 ,300],
            marker: {
                enabled: false
            },
            color: Highcharts.getOptions().colors[5],
            zIndex: 1
        }, {
            name: 'Output (qty)',
            type: 'column',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: '%Yield',
            type: 'spline',
            yAxis: 1,
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });

    /**
     * Chart #3
     */
    var chart3 = Highcharts.chart('chart3', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Daily Factory Yield'
        },
        xAxis: [{
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Value',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Target',
            type: 'line',
            data: [300, 300, 300, 300 ,300 ,300 ,300 ,300 ,300 ,300 ,300 ,300],
            marker: {
                enabled: false
            },
            color: Highcharts.getOptions().colors[5],
            zIndex: 1
        }, {
            name: 'ECM',
            type: 'spline',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            color: Highcharts.getOptions().colors[0],
        }, {
            name: 'Process',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            color: Highcharts.getOptions().colors[1],
        }]
    });

    /**
     * Chart #4
     */
    var chart4 = Highcharts.chart('chart4', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Monthly Factory Yield'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Value',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Target',
            type: 'line',
            data: [300,300,300,300,300,300,300,300,300,300,300,300],
            marker: {
                enabled: false
            },
            color: Highcharts.getOptions().colors[5],
            zIndex: 1
        }, {
            name: 'ECM',
            type: 'spline',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            color: Highcharts.getOptions().colors[0],
        }]
    });

    /**
     * Chart #5
     */
    var chart5 = Highcharts.chart('chart5', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Green Sheet Stock'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            crosshair: true
        },
        yAxis: {
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        },
        tooltip: {
            formatter: function () {
                let total = 0;
                var s = '<b>' + this.x + '</b>';
    
                $.each(this.points, function () {
                    s += '<br/>' + this.series.name + ': ' + this.y ;
                    if(this.series.index !== 0) {
                        total += this.y;
                    }else {
                        s += '<br /> --------- <br />'
                    }
                    
                });

                s += '<br /> Total: ' + total;
    
                return s;
            },
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Plan',
            type: 'line',
            data: [30, 20, 10, 30 ,30],
            marker: {
                enabled: false
            },
            color: Highcharts.getOptions().colors[5],
            zIndex: 1
        }, {
            name: 'Punched',
            data: [5, 3, 4, 7, 2],
            color: Highcharts.getOptions().colors[3],
        }, {
            name: 'Remain',
            data: [3, 4, 4, 2, 5],
            color: Highcharts.getOptions().colors[0],
        }]
    });

    /**
     * Chart #6
     */
    var chart6 = Highcharts.chart('chart6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Un-allocated'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                // ----------------------------
                // This is used for active
                // ----------------------------
                // sliced: true,
                // selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    });

    /**
     * Chart #7
     */
    var chart7 = Highcharts.chart('chart7', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Shiping Status'
        },
        xAxis: [{
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            crosshair: true
        }],
        yAxis: [{
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Quantity',
            type: 'column',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

    /**
     * Chart #8
     */
    var chart8 = Highcharts.chart('chart8', {
        
        chart: {
            zoomType: 'xy',
            type: 'column'
        },
        title: {
            text: 'Shiping Status'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 50,
            floating: true,

        },
        series: [{
            name: 'Quantity',
            colorByPoint: true,            
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    
        }]
    });

    /**
     * Chart #9
     */
    var chart9 = Highcharts.chart('chart9', {
        chart: {
            zoomType: 'xy',
            type: 'bar'
        },
        title: {
            text: 'Shiping Status'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Quantity',          
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    
        }]
    });
    
    /**
     * Chart #10
     */
    var chart10 = Highcharts.chart('chart10', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Green Sheet Stock'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            crosshair: true
        },
        yAxis: [{
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Y1: Bar Graph',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Y2: Bar Graph',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true
        },
        series: [{
            type: 'line',
            name: 'Targetqty',
            data: [20, 20, 20, 30, 30],
            marker: {
                enabled: false
            },
            zIndex: 1,
            color: Highcharts.getOptions().colors[5],
        }, {
            type: 'line',
            name: 'Total',
            data: [10, 22, 11, 4, 9],
            yAxis: 1,
            zIndex: 2,
            color: Highcharts.getOptions().colors[1],
        }, {
            name: 'OTHER_PRODUCT_QTY',
            data: [5, 3, 4, 7, 2],
            color: Highcharts.getOptions().colors[8],
        }, {
            name: 'CHIP_PRODUCT_QTY',
            data: [3, 4, 4, 2, 5],
            color: Highcharts.getOptions().colors[0],
        }]
    });

    /**
     * Chart #11
     */
    var chart11 = Highcharts.chart('chart11', {
        title: {
            text: 'Parametoer Name'
        },
        xAxis: {
            title: {
                text: null
            },
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            labels: {
                formatter: function () {
                    return 'mc' + this.value;
                }
            }
        },
        series: [{
            name: 'Quantity',
            data: [4, 2, 4, 6, 3, 5, 4, 1, 1, 3]
        }]
    });

    var extremes = chart11.yAxis[0].getExtremes();
    const pltLineCenter = (extremes.max/2);
    const pltLineCLL = pltLineCenter/2;
    const pltLineCUL = pltLineCenter+pltLineCLL;

    // PlotLine Center
    chart11.yAxis[0].addPlotLine({
        value: pltLineCenter,
        color: 'green',
        width: 2,
        dashStyle: 'LongDashDotDot',
        label: {
            text: 'Target Line',
            align: 'right'
        }
    });

    // PlotLine CLL
    chart11.yAxis[0].addPlotLine({
        value: pltLineCLL,
        color: Highcharts.getOptions().colors[6],
        width: 2,
        dashStyle: 'dot',
        label: {
            text: 'CLL',
            align: 'right'
        }
    });

    // PlotLine CUL
    chart11.yAxis[0].addPlotLine({
        value: pltLineCUL,
        color: Highcharts.getOptions().colors[6],
        width: 2,
        dashStyle: 'dot',
        label: {
            text: 'CUL',
            align: 'right'
        }
    });

    // PlotLine MAX
    chart11.yAxis[0].addPlotLine({
        value: extremes.max,
        color: 'red',
        width: 2,
        label: {
            text: 'UL',
            align: 'right'
        }
    });

    // PlotLine Min
    chart11.yAxis[0].addPlotLine({
        value: extremes.min,
        color: 'red',
        width: 2,
        label: {
            text: 'LL',
            align: 'right'
        }
    });

    /**
     * Chart #2
     */
    var chart12 = Highcharts.chart('chart12', {
        chart: {
            zoomType: 'xy',
            type: 'column'
        },
        title: {
            text: 'Shiping Status'
        },
        xAxis: [{
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            crosshair: true,
            gridLineWidth: 3,
            tickInterval: 3
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Quantity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }],
        tooltip: {
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: 'Quantity',          
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 144.6, 129.5, 106.4, 71.1, 66.6, 49.4],
            groupPadding: -0.1
        }, {
            name: 'Quantity',          
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 144.6, 129.5, 106.4, 71.1, 66.6, 49.4],
            type: 'spline'
        }]
    });

    var extremes = chart12.xAxis[0].getExtremes();

    // PlotLine MAX
    chart12.xAxis[0].addPlotLine({
        value: extremes.max,
        color: 'red',
        width: 2,
        label: {
            text: '+3SD',
        },
        zIndex: 4
    });

    // PlotLine Min
    chart12.xAxis[0].addPlotLine({
        value: extremes.min,
        color: 'red',
        width: 2,
        label: {
            text: '-3SD',
        },
        zIndex: 4
    });

    /**
     * Chart #13
     */
    var chart13 = Highcharts.chart('chart13', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        xAxis: {
            categories: ['1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18', '1017-18'],
            crosshair: true,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Small',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
        }, {
            name: 'PP_PL',
            data: [11.9, 71.5, 51.4, 1.2, 41.0, 23.0, 135.6, 148.5, 216.4, 241.1, 11.6, 15.4]
    
        }, {
            name: 'ST',
            data: [234.9, 13.5, 51.4, 1.2, 234.0, 23.0, 123.6, 41.5, 216.4, 645.1, 11.6, 15.4]
    
        }]
    });

});
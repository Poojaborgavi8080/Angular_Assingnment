import { Component, Input, OnInit, input } from '@angular/core';
import * as HighCharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() label: string = '';
  @Input() total: string = '';
  @Input() percentage: string = '';

  HighCharts = HighCharts;
  chartOptions = {}
  constructor(){}

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor : null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
      },
      title: {
          text: null,
          align: 'left'
      },
      subtitle: {
          text: null,
          align: 'left'
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Million tonnes CO<sub>2</sub>-equivalents'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span>' +
              '<br>',
              outside: true
      },
legend:{

  enabled: false
    },

      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },

    

      xAxis:{
        labels:{
                enabled : false,
              },
              title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickOptions: []
      },

      YAxis:{
        labels:{
                enabled : false,
              },
              title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickOptions: []
      },


      
  
      series: [{
         data: [71, 78, 39, 66]
      }]
  };
    HC_exporting(this.HighCharts)
    
  }

}

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
    public options: any = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Your Invesment Wallet'
        },
        xAxis: {
            categories: ['Wallet']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Wallet investment'

            }, maxWidth: 100
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Stocks and variable Income',
            data: [37.5]
        }, {
            name: 'Fixed Income',
            data: [25]
        }, {
            name: 'Foresight',
            data: [25]
        },
        {
            name: 'Forex',
            data: [12.5]
        }
        ]
    }

    constructor() { }

    ngOnInit(): void {
        Highcharts.chart('container-bar', this.options)
    }


}

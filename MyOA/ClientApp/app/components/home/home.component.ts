import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['../app/app.component.css','./home.component.css']
})
export class HomeComponent implements OnInit  {
    // lineChart configration
    public lineChartData: Array<any> = [
        { data: [10, 20, 30, 30, 10, 10, 20, 60, 30, 60, 20, 30], label: 'Cost' },
        { data: [20, 30, 30, 30, 50, 70, 80, 50, 50, 20, 30, 30], label: 'Remaining Budget' },
        { data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], label: 'Monthly Budget' }
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    public lineChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
                    //suggestedMax: 100
                }
            }]
        }
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    // lineChart configration

    public images: Array<string> = ['../images/01.jpg', '../images/06.jpg', '../images/07.jpg'];

    ngOnInit() {
    }

}

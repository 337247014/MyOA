import { Component, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs/operators';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
    selector: 'order-history',
    templateUrl: './order-history.component.html',
    styleUrls: ['../app/app.component.css']
})
export class OrderHistoryComponent {
    constructor(private modalService: NgbModal) { }

    fromDate: any;
    toDate: any;
    curentPage = 1;
    checkOrderDetail(content: any) {
        this.modalService.open(content, { size: 'lg' });
    }

    // lineChart configration
    public lineChartData: Array<any> = [
        { data: [1000, 2000, 3000, 3000, 1000, 1000, 2000, 6000, 3000, 6000, 2000, 3000], label: 'Cost' },
        { data: [2000, 3000, 3000, 3000, 5000, 7000, 8000, 5000, 5000, 2000, 3000, 3000], label: 'Remaining Budget' },
        { data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000], label: 'Monthly Budget' }
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    public lineChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    //suggestedMax: 100
                }
            }]
        }
    };
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    // lineChart configration

    //barChart configration
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['R2R', 'DS CoE', 'O2C', 'I2P', 'ICO', ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [650, 590, 800, 810, 560], label: 'Current Month Cost' },
    ];
    //barChart configration

    NTIDs: any;
    @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();
    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            merge(this.focus$),
            merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
            map(term => (term === '' ? states
                : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
        );
}
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'order-history',
    templateUrl: './order-history.component.html',
    styleUrls: ['../app/app.component.css']
})
export class OrderHistoryComponent {
    constructor(private modalService: NgbModal) { }

    curentPage = 1;
    checkOrderDetail(content: any) {
        this.modalService.open(content, { size: 'lg' });
    }
}
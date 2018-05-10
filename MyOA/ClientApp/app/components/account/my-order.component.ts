import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'my-order',
    templateUrl: './my-order.component.html',
    styleUrls: ['../app/app.component.css']
})
export class MyOrderComponent {
    constructor(private modalService: NgbModal) { }

    checkOrderDetail(content: any) {
        this.modalService.open(content, { size: 'lg' });
    }
}
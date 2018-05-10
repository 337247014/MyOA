import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['../app/app.component.css']
})
export class OrderFormComponent {
    constructor(private modalService: NgbModal) { }

    curentPage = 1;
    claimStationary(content: any) {
        this.modalService.open(content, { size: 'lg' });
    }
}
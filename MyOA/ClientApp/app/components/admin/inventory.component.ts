import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['../app/app.component.css']
})
export class InventoryComponent {
    closeResult: string;

    constructor(private modalService: NgbModal) { }

    open(content: any) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    openWindowCustomClass(content: any) {
        this.modalService.open(content, { size: 'lg' });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
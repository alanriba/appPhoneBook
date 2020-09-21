import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertPopupComponent } from '../shared/alert-popup/alert-popup.component';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {
  private errors = new BehaviorSubject<string[]>([]);

  constructor(private _ngbModal: NgbModal) { }

  showError(errors: string): any {
    const modalRef = this._ngbModal.open(AlertPopupComponent);
    modalRef.componentInstance.errorMessage = errors;
  }
}

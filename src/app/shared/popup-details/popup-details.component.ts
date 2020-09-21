import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-details',
  templateUrl: './popup-details.component.html',
  styleUrls: ['./popup-details.component.css'],
})
export class PopUpDetailsComponent implements OnInit {
  @Input() persona: any;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
}

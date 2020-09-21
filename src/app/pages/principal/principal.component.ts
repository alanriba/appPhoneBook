import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaModel } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import Utilidades from 'src/app/utils/utils';
import { PopUpDetailsComponent } from '../../shared/popup-details/popup-details.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  providers: [Utilidades, PopUpDetailsComponent],
})

export class PrincipalComponent implements OnInit {

  loading = true;
  personList: PersonaModel[] = [];
  filtrarPersona = '';

  constructor(
    private personaService: PersonaService,
    private utilServices: Utilidades,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.personaService.getPersona().subscribe((personaObj) => {
      if (personaObj.length > 0) {
        this.loading = false;
        this.personList = personaObj;
      }
    });
  }

  ngDestroy(): void {
    this.cargarUsuarios();
  }

  viewDetail(person: any): void {
    const modalRef = this.ngbModal.open(PopUpDetailsComponent);
    modalRef.componentInstance.persona = person;
    console.log(this.utilServices.validateRut(person.rut));
  }
}

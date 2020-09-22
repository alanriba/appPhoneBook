import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaModel } from 'src/app/model/persona.model';
import { RegionModel } from 'src/app/model/region.model';
import { PersonaService } from 'src/app/services/persona.service';
import { RegionService } from 'src/app/services/region.service';
import Utilidades from 'src/app/utils/utils';
import { PopUpDetailsComponent } from '../../shared/popup-details/popup-details.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  providers: [ PopUpDetailsComponent],
})
export class PrincipalComponent implements OnInit {
  loading = true;
  personList: PersonaModel[] = [];
  regionList: RegionModel[] = [];
  filtrarPersona = '';

  constructor(
    private personaService: PersonaService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.personaService.getPersona().subscribe((respObjPersona: PersonaModel[]) => {
      if (respObjPersona.length > 0) {
        this.personList = respObjPersona;
        this.loading = false;
      }
    });
  }

  viewDetail(person: any): void {
    const modalRef = this.ngbModal.open(PopUpDetailsComponent);
    modalRef.componentInstance.persona = person;
  }
}

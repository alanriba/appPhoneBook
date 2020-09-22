import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegionService } from 'src/app/services/region.service';
import { RegionModel } from 'src/app/model/region.model';
import Utilidades from 'src/app/utils/utils';
import { PersonaModel } from 'src/app/model/persona.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-popup-details',
  templateUrl: './popup-details.component.html',
  styleUrls: ['./popup-details.component.css'],
})
export class PopUpDetailsComponent implements OnInit {
  @Input() persona: any;

  regionList: RegionModel[] = [];
  regionObj: RegionModel;
  personaObjRegion: string;
  isValidRut: boolean;
  isValidTelefono: boolean;

  constructor(
    public activeModal: NgbActiveModal,
    private regionService: RegionService
  ) {
    this.cargarRegion();
  }
  ngOnInit(): void {}

  actualizarArreglo(objRegion: any): void {
    this.isValidRut = new Utilidades().validateRut(this.persona.rut);
    this.isValidTelefono = new Utilidades().validarNumeroTelefonico(
      this.persona.telefono
    );

    console.log(this.isValidRut, 'ruit');
    console.log(this.isValidTelefono, 'relegono');

    let index = 0;
    let i = 0;
    for (const comuna of objRegion) {
      for (const c of comuna.comunas) {
        if (c.id === this.persona.direccion.comuna.id) {
          this.personaObjRegion = comuna.nombre;
        }
        i++;
      }
      index++;
    }
  }

  cargarRegion(): void {
    this.regionService.getRegion().subscribe((respObj) => {
      if (respObj.length > 0) {
        this.regionList = respObj;
        this.actualizarArreglo(this.regionList);
      }
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [],
})
export class PrincipalComponent implements OnInit {
  loading: boolean = true;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.loading = true;
    this.personaService.getPersona().subscribe((persona: any) => {
      console.log(persona);
    });

    this.loading = false;
  }
}

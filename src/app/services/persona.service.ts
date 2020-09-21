import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { PersonaModel } from '../model/persona.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${base_url}/persona`;
  }

  // tslint:disable-next-line: typedef
  getPersona() {
    return this.http.get(this.url).pipe(map((resp: PersonaModel[]) => resp));
  }
}

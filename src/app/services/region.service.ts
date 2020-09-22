import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RegionModel } from '../model/region.model';
import { map } from 'rxjs/internal/operators/map';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${base_url}/region`;
  }

  // tslint:disable-next-line: typedef
  getRegion() {
    return this.http
      .get<RegionModel[]>(this.url)
      .pipe(map((resp: RegionModel[]) => resp));
  }
}

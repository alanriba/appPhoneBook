import { DireccionModel } from './direccion.model';
import { RegionModel } from './region.model';

interface PersonaInterfaz {
  id: string;
  nombre: string;
  apellido: string;
  telefono: string;
  rut: string;
  direccion: string;
  activo: boolean;
  region: string;
}
export class PersonaModel {
  constructor(
    public id: string,
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public rut: string,
    public direccion: DireccionModel,
    public activo: boolean,
    public region: RegionModel
  ) {}
}

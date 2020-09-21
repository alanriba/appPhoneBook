import { DireccionModel } from './direccion.model';


export class PersonaModel {
  constructor(
    public id: string,
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public rut: string,
    public direccion: DireccionModel,
    public activo: boolean,
  ) {}

}


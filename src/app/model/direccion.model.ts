import { ComunaModel } from './comuna.model';


export class DireccionModel {
  constructor(
    public calle: string,
    public numero: string,
    public comuna: ComunaModel,
  ) {}

}


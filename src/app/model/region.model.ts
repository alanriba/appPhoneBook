import { ComunaModel } from './comuna.model';

export class RegionModel {

    constructor(
        public id: number,
        public nombre: string,
        public comuna: ComunaModel
    ) {}
}


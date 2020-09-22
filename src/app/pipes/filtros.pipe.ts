import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtros',
})
export class FiltrosPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultadoFiltro = [];

    if (arg === '' || arg.length < 3) {
      return value;
    }

    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoFiltro.push(post);
      }
    }
    return resultadoFiltro;
  }
}

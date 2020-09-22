import { Injectable } from '@angular/core';

@Injectable()
export default class Utilidades {
  public validateRut(rut: string): any {
    if (typeof rut === 'string' || typeof rut === 'number') {
      const rutSinFormato = this.limpiarRUT(rut);
      const rutSinDv = rutSinFormato.slice(0, -1);
      const rutDv = rutSinFormato.split('').pop().toLowerCase();

      return this.calcularDv(rutSinDv) === rutDv;
    } else {
      return false;
    }
  }

  calcularDv(rut): any {
    let suma = 0;
    let rutReversa: any = this.limpiarRUT(rut).split('').reverse();

    for (let i = 0, j = 2; i < rutReversa.length; i++, j < 7 ? j++ : (j = 2)) {
      suma += rutReversa[i] * j;
    }

    let resultado = 11 - (suma % 11);
    if (resultado === 11) return '0';
    if (resultado === 10) return 'k';
    return String(resultado);
  }

  limpiarRUT(rut): any {
    return String(rut).replace(/[^0-9a-z]/gi, '');
  }

  validarNumeroTelefonico(phoneNumber: string): any{
    if (/^([0-9]{5})+(-)+([0-9]{6})$/i.test(phoneNumber)){
      return true;
    }
    return false;
  }
}

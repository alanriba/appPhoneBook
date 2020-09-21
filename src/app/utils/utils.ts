export default class Utilidades {
  // tslint:disable-next-line: typedef
  public validateRut(rut: string) {
    let suma = 0;
    const arrRut = rut.split('-');
    let rutSolo = Number(arrRut[0]);
    const verif = arrRut[1];
    let continuar = true;

    for (let i = 2; continuar; i++) {
      suma += (rutSolo % 10) * i;
      rutSolo = Number(rutSolo / 10);
      i = i === 7 ? 1 : i;
      continuar = rutSolo === 0 ? false : true;
    }
    const resto = suma % 11;
    const dv: any = 11 - resto;
    if (dv === 10) {
      if (verif.toUpperCase() === 'K') {
        return true;
      }
    } else if (dv === String(11) && verif === String(0)) {
      return true;
    } else if (dv === verif) {
      return true;
    } else {
      return false;
    }

    return false;
  }
}

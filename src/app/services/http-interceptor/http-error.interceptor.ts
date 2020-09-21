import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorService } from '../services/http-error.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private httpErrorService: HttpErrorService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {

        return next.handle(request)
            .pipe(
                catchError(err => {
                    let errMsg = "";
                    if (err.error instanceof ErrorEvent) {
                     
                        this.httpErrorService.showError('Un error ha ocurrido:' + err.error.message);
                    } else {
                        this.httpErrorService.showError(
                            `Código de error ${err.status}, `
                             + `Cuerpo del mensaje: ${err.error}`);
                    }

                    return throwError(
                        'Lamentamos lo ocurrido; por favor intente mas tarde.');
                })
            )
    }
}    
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];

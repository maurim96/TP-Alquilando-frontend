import { AuthService } from './../authentication/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const url = req.url.split('/');        
        // If the request is not for login
        if (url[1] !== 'auth' && url[1] !== 'externalauth') {
            // Get the auth token from the service. 
            //In this case I implement 'Bearer' type token.
            const authToken = 'Bearer ' + this._authService.getAccessToken();
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            req = req.clone({
                headers: req.headers.set('Authorization', authToken)
            });
            // send cloned request with header to the next handler.
        }
        return next.handle(req);

    }
}

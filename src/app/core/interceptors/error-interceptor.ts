import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import 'rxjs/add/operator/do';

import { Observable } from 'rxjs';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';
// import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class HttpErrorResponseInterceptor implements HttpInterceptor {

    // @BlockUI() blockUI: NgBlockUI;

    constructor(        
        // private toastr: ToastrManager
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do(evt => {
            if (evt instanceof HttpResponse) {
                if (evt.body) {
                    //If blockUI is implemented, delete the 'comment lines' and this will work.
                    // this.blockUI.stop();
                }
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                //Here you can manage errors by their 'Status Code'.
                //Read full list at: https://restfulapi.net/http-status-codes/
                if (err.status == 401) {
                    //Unauthorized
                    //Here is an message example using 'Toastr'. Must install it if choose to implement it.
                    // this.toastr.warningToastr('Acción no permitida', 'Cuidado')
                } else {
                    // this.toastr.errorToastr((err as any).error.message, 'Error');
                }
            }
        })
    }
}
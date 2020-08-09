import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonService } from 'src/_services/common.service';

@Injectable({
    providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {

    constructor(private commonService: CommonService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // this.commonService.setLoading(true);
        let req = request;
        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        console.log(request)
        req = request.clone({
            headers: headers
        });
        return next.handle(req).pipe(
            tap(event => {
                // this.commonService.setLoading(false)
                if(event instanceof HttpResponse) {
                    console.log(event)
                }
            },
            err => {
                // this.commonService.setLoading(false)
                console.log('Server Error')
            })
        );
    }

}
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { countryInterface} from './app';
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private _http: HttpClient) {}
    sendData(): Observable<countryInterface[]> {
       return this._http.get<countryInterface[]>('../assets/data/db.json')
       .pipe(catchError(this.errorHandler))
    }
    errorHandler(error: HttpErrorResponse) {
       return throwError(error.message || "unknown server error")
    }
    checkMail() {
        return [
            {
                mail: "prahlad@gmail.com",
                password: 123456,
                user: 'root'
            },
            {
                mail: "eswar@gmail.com",
                password: 111111,
                user: 'guest'
            },
            {
                mail: "ravi@gmail.com",
                password: 121212,
                user: 'super'
            },
        ]
    }
}

import { Injectable }            from '@angular/core';
import { Observable,
    BehaviorSubject }            from 'rxjs';
import { Http } from '@angular/http';

import { Header } from 'ng2-cbp-cf';
import { Config } from './shared';

@Injectable()
export class AppService {
    data: BehaviorSubject<Header>;
    private url: string;

    constructor(private http: Http, private config: Config) {
        this.data = new BehaviorSubject<Header>(null);
        this.url = config.apiUrl + config.headerContext;
        this.http.get(this.url).subscribe(
            (respData) => {
                this.data.next(respData.json());
            });
    }

    getHeaderData(): Observable<Header> {
        return this.data.asObservable();
    }
}

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WatsonAssistantService {

  constructor(private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

   postConversation(objConversation): Observable<any> {
    return this.http.post<any>('http://173.193.106.61:31176'+ '/conversation/', objConversation)
      .pipe(
        map(response => {
        return response; 

        })

      );

  }
}


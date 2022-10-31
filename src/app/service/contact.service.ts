import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://smovtekllc-web.herokuapp.com/api/contact/exec'

  constructor(private http: HttpClient) { }

  PostMessage(input: 'text') {
    return this.http.post(this.apiUrl, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}

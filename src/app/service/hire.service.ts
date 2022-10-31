import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HireService {
  private apiUrl = 'https://smovtekllc-web.herokuapp.com/api/hire/exec'

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

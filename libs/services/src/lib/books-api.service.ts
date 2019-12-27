import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<Observable<any>>(`https://www.googleapis.com/books/v1/volumes?q=angular&key=AIzaSyAFZZjSiGNeZgbfNyEm7L0Nq_b3nXPvH84`)
  }
}

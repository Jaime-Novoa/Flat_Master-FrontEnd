import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartamentoService {
  private apiUrl = 'http://localhost:3000/apartamentos';

  constructor(private http: HttpClient) {}

  getApartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createApartamento(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateApartamento(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteApartamento(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

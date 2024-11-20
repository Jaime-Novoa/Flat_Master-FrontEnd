import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // La URL de tu backend
  private tokenKey = 'token'; // Llave para guardar el token en localStorage

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem(this.tokenKey); // Elimina el token
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey); // Verifica si hay un token guardado
  }
}

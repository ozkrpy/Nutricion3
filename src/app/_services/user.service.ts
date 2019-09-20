import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAll() {
    console.log('usuarios atempted');

    return this.http.get<User[]>(`${environment.apiUrl}/usuarios`);
  }
}

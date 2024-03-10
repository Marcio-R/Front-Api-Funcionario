import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../Models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}`
  constructor(private http: HttpClient) { }

  GetFuncionarios():Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiUrl)
  }
}

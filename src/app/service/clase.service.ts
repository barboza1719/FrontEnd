import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaClasess } from '../pages/lista-clasess';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private url:string="http://localhost:8080/ApiRest/clase";
  constructor( private http:HttpClient) { }


  getAll():Observable<ListaClasess[]>{
    return this.http.get<ListaClasess[]>(this.url);
  }

  create(clase:ListaClasess):Observable<ListaClasess>{
    return this.http.post<ListaClasess>(this.url, clase);
  }

  get(id:number):Observable<ListaClasess>{
    return this.http.get<ListaClasess>(this.url+'/'+id);
  }

  update(clase:ListaClasess):Observable<ListaClasess>{
    return this.http.put<ListaClasess>(this.url, clase);
  }

  delete(id:number):Observable<ListaClasess>{
    return this.http.delete<ListaClasess>(this.url+'/'+id);
  }
}


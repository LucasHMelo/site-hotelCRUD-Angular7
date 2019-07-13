import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospedesService {

    uri = 'http://localhost:3000/admin';
  
  
    constructor(private http: HttpClient) { }
  
    addHospedes(name, email, password, cep, endereco, bairro, cidade, estado ) {
      const obj = {
        name: name,
        email: email,
        password: password,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      };
      console.log(obj);
      this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
    }
  
    getHospedes() {
      return this.http.get(`${this.uri}`);
    }
  
    editHospedes(id) {
      return this.http.get(`${this.uri}/edit/${id}`);
    }
  
    updateHospede(name, email, password, cep, endereco, bairro, cidade, estado, id) {
      const obj = {
        name: name,
        email: email,
        password: password,
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      };
      this.http.post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
  
    deleteHospedes(id) {
      return this.http.get(`${this.uri}/delete/${id}`);
    }
}

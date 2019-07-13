import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
import { Cep } from '../cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  // constructor(private http: HttpClient ) { }

  // buscar(cep: string) {
  //   return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  //             .toPromise()
  //             .then(response => this.converterRespostaParaCep(response.json()));

  // }

  // private converterRespostaParaCep(cepResposta): Cep {
  //   let cep = new Cep();
  //   cep.cep = cepResposta.cep;
  //   cep.logradouro = cepResposta.logradouro;
  //   cep.cidade = cepResposta.localidade;
  //   cep.bairro = cepResposta.bairro;
  //   cep.estado = cepResposta.uf;
  //   return cep;
  // }
}
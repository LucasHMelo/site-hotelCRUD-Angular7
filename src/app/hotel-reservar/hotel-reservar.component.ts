import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ConsultaCepService } from '../services/consulta-cep.service';
import { Cep } from '../cep';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import  Hospede  from '../hospede';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-hotel-reservar',
  templateUrl: './hotel-reservar.component.html',
  styleUrls: ['./hotel-reservar.component.css']
})
export class HotelReservarComponent implements OnInit {

  dataadded = false;
  msg: String ;
  topicHasError = true;
  submitted = false;
  errorMsg ='';
  mDataArray:any[] = [];
  private hospede  = []; 
  newCustomerForm: FormGroup;
  hotelModel = new Hospede();
  cepModel = new Cep();

  constructor(private formBuilder: FormBuilder,private http:HttpClient ){} //_enrollmentService: EnrollmentService

  validateTopic(value){
    if(value == "default"){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
    }

    onSubmit(data){
      
      //let postData = {name: data.name, email: data.email, phone: data.phone};
      this.http.post<any>('http://localhost:3000/admin/add', data).subscribe(result=>{
        location.reload();
        this.dataadded = true;
        this.msg = 'Data Added successfully';
      });
      
  }

  searchCep(cep){
    this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe((res : any[])=>{
    console.log(res);
    this.hospede = res;
    //this.products = res;
    });
}

// showConfig(cep) {
//   this.http.get(`//viacep.com.br/ws/${cep}/json`)
//     .subscribe((res) => this.cepModel = {
//       endereco: res.logradouro,
//       bairro: res.bairro,
//       cidade: res.uf,
//       estado: res.localidade
//     });
// }

  // searchCep(cep){

  //   this.http.get(`//viacep.com.br/ws/${cep}/json`)
  //         .subscribe(
  //           res => {
              
  //               this.populateAddress(res);
               
  //           });

  // }

  // populateAddress(res) {
  //   this.newCustomerForm.patchValue({
  //     endereco: res.logradouro,
  //     bairro: res.bairro,
  //     cidade: res.uf,
  //     estado: res.localidade
  //   });
  // }


  //cep = new Cep('','','','','','','');
  // constructor(
  //   // private http: HttpClient,
  //   private cepService: ConsultaCepService

  // ) { }

  // buscar(){
  //   this.cepService.consultaCEP(this.cep.cep);
  // }

  getUser(){
    this.http.get<any>('http://localhost:3000/admin/').subscribe(result=>{
      //alert(JSON.stringify(result));
      this.mDataArray = result.data;
    });
  }

  // ngOnInit(): void {
     
  // }

  ngOnInit() {
    this.getUser();
    // this.newCustomerForm = this.formBuilder.group({
    //   endereco: [null],
    //   bairro: [null],
    //   cidade: [null],
    //   estado: [null]
    // });
  }

  // consultaCEP(cep, form) {
  //   // Nova variável "cep" somente com dígitos.
  //   cep = cep.replace(/\D/g, '');

  //   if (cep != null && cep !== '') {
  //     this.cepService.consultaCEP(cep)
  //     .subscribe(dados => this.populaDadosForm(dados, form));
  //   }
  // }

  // populaDadosForm(dados, formulario) {
  //   /*formulario.setValue({
  //     nome: formulario.value.nome,
  //     email: formulario.value.email,
  //     endereco: {
  //       rua: dados.logradouro,
  //       cep: dados.cep,
  //       numero: '',
  //       complemento: dados.complemento,
  //       bairro: dados.bairro,
  //       cidade: dados.localidade,
  //       estado: dados.uf
  //     }
  //   });*/

  //   formulario.form.patchValue({
  //     endereco: {
  //       rua: dados.logradouro,
  //       // cep: dados.cep,
  //       complemento: dados.complemento,
  //       bairro: dados.bairro,
  //       cidade: dados.localidade,
  //       estado: dados.uf
  //     }
  //   });

  //   // console.log(form);
  // }

  // resetaDadosForm(formulario) {
  //   formulario.form.patchValue({
  //     endereco: {
  //       rua: null,
  //       complemento: null,
  //       bairro: null,
  //       cidade: null,
  //       estado: null
  //     }
  //   });
  // }

}

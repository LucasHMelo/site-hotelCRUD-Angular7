import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { HospedesService } from '../services/hospedes.service';

@Component({
  selector: 'app-add-hospede',
  templateUrl: './add-hospede.component.html'
})
export class AddHospedeComponent implements OnInit {
  dataadded = false;
  msg: String ;
  gst_addForm;
  constructor(private fb: FormBuilder , private bs: HospedesService) {
    this.createForm();
  }

  createForm() {
    this.gst_addForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  addHospedes (name, email, password, cep, endereco, bairro, cidade, estado) {
    this.bs.addHospedes(name, email, password, cep, endereco, bairro, cidade, estado);
    location.reload();
    this.dataadded = true;
    this.msg = 'Data Added successfully';
    }
  
  ngOnInit() {
  }

}

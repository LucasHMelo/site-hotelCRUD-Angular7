import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospedesService } from '../services/hospedes.service';

@Component({
  selector: 'app-edit-hospede',
  templateUrl: './edit-hospede.component.html',
  styleUrls: ['./edit-hospede.component.css']
})
export class EditHospedeComponent implements OnInit {

  gst_editForm;
  hospede: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private bs: HospedesService, private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.gst_editForm = this.fb.group({
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

  updateHospede(name, email, password, cep, endereco, bairro, cidade, estado) {
    this.route.params.subscribe(params => {
      this.bs.updateHospede(name, email, password, cep, endereco, bairro, cidade, estado, params['id']);
      this.router.navigate(['admin']);
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editHospedes(params['id']).subscribe(res => {
        this.hospede = res;
      });
    });
  }

}

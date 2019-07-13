import { Component, OnInit } from '@angular/core';
import hospede from '../hospede'
import { HospedesService } from '../services/hospedes.service';
import Hospede from '../hospede';

@Component({
  selector: 'app-get-hospede',
  templateUrl: './get-hospede.component.html',
  styleUrls: ['./get-hospede.component.css']
})
export class GetHospedeComponent implements OnInit {
  hospedes: Hospede[];
  constructor(private bs: HospedesService) { }

  deleteHospedes(id) {
    this.bs.deleteHospedes(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit();
    });
  }

  refresh() {
    location.reload();
  }

  ngOnInit() {
    this.bs.getHospedes().subscribe((data: Hospede[]) => {
      this.hospedes = data;
    });
  }

}

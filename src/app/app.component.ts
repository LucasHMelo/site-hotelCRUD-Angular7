import { Component, OnInit } from '@angular/core';
import  Hospede  from './hospede';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'hotel-SkyLine';
  // topicHasError = true;
  // submitted = false;
  // errorMsg = '';
  // mDataArray:any[] = [];

  // HospedeModel = new Hospede('','','',null,null,'','','','');

  // constructor(private http:HttpClient){}

  // validateTopic(value){
  //   if(value == "default"){
  //     this.topicHasError = true;
  //   }else{
  //     this.topicHasError = false;
  //   }
  //   }

    onSubmit(){
      
    //   this.http.post<any>('http://localhost:3000/hospede', data).subscribe(result=>{
    //     alert(JSON.stringify(data));
    // });
    }

    // getHospede(){
    //   this.http.get<any>('http://localhost:3000/hospede').subscribe(result=>{
    //     alert(JSON.stringify(result));
    //     this.mDataArray = result.data;
    //   });
    // }

    // ngOnInit(): void {
    //   this.getHospede();
    // }

}



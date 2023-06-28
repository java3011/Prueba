import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Case } from 'src/app/interfaces/case';
import { CaseService } from 'src/app/services/case.service';
import { Cancer } from 'src/app/interfaces/cancer';
import { CancerService } from 'src/app/services/cancer.service';

@Component({
  selector: 'app-uploadcase',
  templateUrl: './uploadcase.component.html',
  styleUrls: ['./uploadcase.component.css']
})
export class UploadcaseComponent implements OnInit {

  caseForm: FormGroup;

  constructor(private fb:FormBuilder, private http:CaseService, private http2:CancerService) { 
    this.caseForm=this.fb.group({
      casename: ["",[Validators.required, Validators.maxLength(100)]],
      datacase: ["", [Validators.maxLength(100)]],
      noncoplanar:[""],
      cancername:["",[Validators.required]],
      cancerdescription:[""]
    });
  }

  ngOnInit(): void {}

  sendDataCase(){
    let lista:Case={
      casename:this.caseForm.get('casename')?.value,
      datacase:this.caseForm.get('datacase')?.value,
      noncoplanar:this.caseForm.get('noncoplanar')?.value
    }
     let lista2:Cancer={
      cancername:this.caseForm.get('cancername')?.value,
      cancerdescription:this.caseForm.get('cancerdescription')?.value,
     }

    // this.http.PostCase(lista).subscribe(datos =>{
    //   console.log(datos);
    // });
    this.http2.PostCancer(lista2).subscribe(datos =>{
      console.log(datos);
    });

  }
}
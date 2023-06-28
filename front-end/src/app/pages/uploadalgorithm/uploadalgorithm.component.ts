import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Alg } from 'src/app/interfaces/alg';
import { AlgService } from 'src/app/services/alg.service';

@Component({
  selector: 'app-uploadalgorithm',
  templateUrl: './uploadalgorithm.component.html',
  styleUrls: ['./uploadalgorithm.component.css']
})
export class UploadalgorithmComponent implements OnInit {

  AlgorithmForm: FormGroup;
   

  constructor(private fb:FormBuilder, private http:AlgService) { 
    this.AlgorithmForm=this.fb.group({
      algorithminfo: ["",[Validators.required, Validators.maxLength(100)]],
      // algorithmfile: [""]
    
    });
  }

  ngOnInit(): void {}

  sendDataAlgorithm(){
    let lista:Alg={
      algorithminfo:this.AlgorithmForm.get('algorithminfo')?.value,
      algorithmfile:this.AlgorithmForm.get('algorithmfile')?.value
    }
  

    this.http.PostAlg(lista).subscribe(datos =>{
      console.log(datos);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allairlines',
  templateUrl: './allairlines.component.html',
  styleUrls: ['./allairlines.component.css']
})
export class AllairlinesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
   this.fetchData()
  }
  fetchData=()=>{
    this.myapi.allairlines().subscribe(
      (data)=>{
        this.line=data
      }
    )
  }
  
  line:any=[]

  ngOnInit(): void {
  }

}

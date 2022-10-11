import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allpassanger',
  templateUrl: './allpassanger.component.html',
  styleUrls: ['./allpassanger.component.css']
})
export class AllpassangerComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.allpassanger().subscribe(
      (data)=>{
        this.allpass=data
      }
    )
   }
  allpass:any=[]

  ngOnInit(): void {
  }

}

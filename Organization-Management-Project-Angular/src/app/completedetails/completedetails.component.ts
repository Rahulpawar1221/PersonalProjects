import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-completedetails',
  templateUrl: './completedetails.component.html',
  styleUrls: ['./completedetails.component.css']
})
//in order to get Data using particular id we need to fetch the id from the url first that is done by this method
export class CompletedetailsComponent implements OnInit {

  empObj=<Employee>{};
  constructor(private router:ActivatedRoute, private service: HttpService){
  }

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.router.paramMap.subscribe((param)=>{
      // console.log(param.get("id"));
      this.service.getParticularRecordById(param.get("id")).subscribe((response:any)=>{
        // console.log(response);
        this.empObj = response;
      })
    })
  }
}

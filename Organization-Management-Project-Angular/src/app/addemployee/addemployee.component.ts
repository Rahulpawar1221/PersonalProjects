import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/Employee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allcountry:any[]=[];
  isUpdate:boolean = false;

  addData:Employee=<Employee>{};
  constructor(private service: HttpService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    this.getAllCountryFromBackend();
  }

  getDataFromUrl(){
    this.route.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
      this.service.getParticularRecordById(param.get("id")).subscribe((response:any)=>{
        // console.log(response);
        this.addData=response;
        this.isUpdate=true;
      })
    })
  }
  getAllCountryFromBackend(){
    this.service.getAllCountry().subscribe((response:any)=>{
      // console.log(response);
      this.allcountry = response;
    })
  }

  onSubmit(){
    if(this.isUpdate){

      this.addData.updatedBy="Admin";
      this.addData.updatedDate=Date.now();
      this.service.addEmployee(this.addData).subscribe((response:any)=>{
        console.log(response);
        this.router.navigate(['']);
      })

    }else{

      this.addData.createdBy="admin";
    this.addData.updatedBy="admin";
    this.addData.createdDate=Date.now();
    this.addData.updatedDate=Date.now();

    this.service.addEmployee(this.addData).subscribe((response)=>{
      // console.log(response);
      this.router.navigate(['']);
    })
    }
    
  }
}

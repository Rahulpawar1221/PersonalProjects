import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HttpService, private router:Router){}

  getAllEmployees:any[] = [];
  isActionSelected:boolean = false;
  id!:any;

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getAllEmployees().subscribe((response:any)=>{
      console.log(response)
      this.getAllEmployees = response;
    })
  }

  onActionClick(id:any){
    this.isActionSelected =true;
    this.id=id;
  }

  onUpdateClick(){
    if(this.isActionSelected){
      this.router.navigate(['/addemployee',this.id]) //when we click on update employee we r navigated here
    }else{
      alert("Please select a employee to update");
    }
  }

  onDeleteClick(){
    if(this.isActionSelected){
     if(confirm("Are you sure you want to delete this employee")){
       this.service.deleteEmployee(this.id).subscribe((response:any)=>{
        console.log(response);
        this.getDataFromBackend();
       })
     }
    }else{
      alert("Please select a employee to delete");
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "http://localhost:8080/api/";
  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return (this.http.get(`${this.baseUrl}getallemployees`))
  }

  getParticularRecordById(id:any){
   return (this.http.get(`${this.baseUrl}getparticularemprecordbyid/${id}`))
  }

  getAllCountry(){
    return this.http.get(`${this.baseUrl}getallcountry`);
    }

  addEmployee(obj:any){
    return (this.http.post(`${this.baseUrl}addemployee`,obj,{
      responseType:'text'
    }));
  }

  updateEmployee(obj:any){
    (this.http.put(`${this.baseUrl}updateemployee/${obj.id}`,obj,{
      responseType:'text'
    }));
  }

  deleteEmployee(id:any){
   return(this.http.delete(`${this.baseUrl}deleteemp/${id}`, {
    responseType:"text"
   }));
  }
}


export interface Employee{

    id:number;
    name:string;
    mobile_no:string;
    email_id:string;
    salary:number;
    department:string;
    status:string;
    createdBy:string;
    createdDate:number;
    updatedBy:string;
    updatedDate:number;
    countryObj:{
        country_id:number;
        country_name:string;
    }
}
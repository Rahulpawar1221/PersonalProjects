package com.tka.WorkflowNavigator;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String name;
	String mobileno;
	@Column(unique = true)
	String emailid;
	double salary;
	String department;
	String status;
	String createdBy;
	Date ceratedDate;
	String updatedBy;
	Date updatedDate;
	
	@ManyToOne
	@JoinColumn(name = "c_id")
	
	Country country;
	

	public Employee(String name, String mobileno, String emailid, double salary, String department, String status,
			String createdBy, Date ceratedDate, String updatedBy, Date updatedDate, Country country) {
		super();
		this.name = name;
		this.mobileno = mobileno;
		this.emailid = emailid;
		this.salary = salary;
		this.department = department;
		this.status = status;
		this.createdBy = createdBy;
		this.ceratedDate = ceratedDate;
		this.updatedBy = updatedBy;
		this.updatedDate = updatedDate;
		this.country = country;
	}
	public Employee() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCeratedDate() {
		return ceratedDate;
	}

	public void setCeratedDate(Date ceratedDate) {
		this.ceratedDate = ceratedDate;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", mobileno=" + mobileno + ", emailid=" + emailid + ", salary="
				+ salary + ", department=" + department + ", status=" + status + ", createdBy=" + createdBy
				+ ", ceratedDate=" + ceratedDate + ", updatedBy=" + updatedBy + ", updatedDate=" + updatedDate
				+ ", country=" + country + "]";
	}
	
	

}
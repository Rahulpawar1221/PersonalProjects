package com.tka.OrganizationWorkFlow.service;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tka.OrganizationWorkFlow.dao.MainDao;
import com.tka.OrganizationWorkFlow.entity.Country;
import com.tka.OrganizationWorkFlow.entity.Employee;

@Service
public class MainService {
	@Autowired
	MainDao dao;

	public String addCountry(Country c) {
		String msg =dao.addCountry(c);
		if(Objects.isNull(msg)) {
			msg="Country Not Added";
		}
		return msg;
	}
//-------------------------------------------------------------------------------------------------------
	
	public String updateCountry(Country c, int id) { 
		String str = dao.updateCountry(c,id);
		if(Objects.isNull(str)) {
			str="Could not Update Country";
		}
		return str;
	}
//--------------------------------------------------------------------------------------------------------
	public String deleteCountry(int country_id) {
		String deleteMsg = dao.deleteCountry(country_id);
		if(Objects.isNull(deleteMsg)) {
			deleteMsg="Could not Delete Country";
		}
		return deleteMsg;
	}
//--------------------------------------------------------------------------------------------------------
	public List<Country> getAllCountry(Country c) {
		List<Country> list = dao.getAllCountry();
		if(Objects.isNull(list)) {
			list=null;
		}
		return list;
	}
//--------------------------------------------------------------------------------------------------------
	public Country getParticularCountryById(int country_id) {
		Country country=dao.getParticularCountryById(country_id);
		if(Objects.isNull(country)) {
			country=null;
		}
		return country;
	}
//--------------------------------------------------------------------------------------------------------

	public String addEmployee(Employee emp) {
		String msg=dao.addEmployee(emp);
		if(Objects.isNull(msg)) {
			msg="Employee Not Added";
		}
		return msg;
	}
//--------------------------------------------------------------------------------------------------------

	public String updateEmployee(Employee emp, int id) {
		String msg=dao.updateEmployee(emp,id);
		if(Objects.isNull(msg)) {
			msg="Employee Not Updated";
		}
		return msg;
	}
//--------------------------------------------------------------------------------------------------------
	public String deleteEmployee(int id) {
		String msg=dao.deleteEmployee(id);
		if(Objects.isNull(msg)) {
			msg="Employee is not deleted..";
		}
		return msg;
	}
//--------------------------------------------------------------------------------------------------------

	public List<Employee> getAllEmployees() {
		List<Employee> list = dao.getAllEmployees();
		if(Objects.isNull(list)) {
			list=null;
		}
		return list;
	}
//--------------------------------------------------------------------------------------------------------

	public Employee getParticularRecordById(int id) {
		Employee emp = dao.getParticularRecordById(id);
		return emp;
	}
//--------------------------------------------------------------------------------------------------------

	public HashMap login(Employee e) {
		Employee emp = dao.login(e);
		
		HashMap map = new HashMap();
		if(Objects.isNull(emp)) {
			map.put("msg", "Invalid USer");
		}else {
			map.put("msg", "Valid User");
		}
		map.put("user", emp);
		
		return map;
	}
}

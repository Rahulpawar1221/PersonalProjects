package com.tka.OrganizationWorkFlow.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.tka.OrganizationWorkFlow.entity.Country;
import com.tka.OrganizationWorkFlow.entity.Employee;



@Repository
public class MainDao {
	@Autowired
	SessionFactory factory;
	public String addCountry(Country c) {
		
	   Session session = null;
	   Transaction tx = null;
	   String msg = null;
	   try {
	   session =factory.openSession();
	   tx = session.beginTransaction();
	   session.persist(c);
	   tx.commit();
	   msg = "Country added successfully";
	   }catch(Exception e) {
		   if(tx!=null) {
			   tx.rollback();
		   }
		   e.printStackTrace();
	   }finally {
		   if(session!=null) {
			   session.close();
		   }
	   }
	   return msg;
	}
//--------------------------------------------------------------------------------------------------------
	
	public String updateCountry(Country c, int id) {
		Session session = null;
		Transaction tx = null;
		String str=null;
		try {
			session=factory.openSession();
			tx=session.beginTransaction();
			
			Country country = session.get(Country.class, id);
			if(country!=null) {
				country.setCountry_name(c.getCountry_name());
				session.merge(country);
				tx.commit();
				str="Country Updated Successfully";
			}
			else {
				str="Country not Found";
			}
		}
		catch(Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return str;
	}

//--------------------------------------------------------------------------------------------------------------
	public String deleteCountry(int country_id) {
		Session session = null;
		Transaction tx = null;
		String deleteMsg = null;
		
		try {
			session = factory.openSession();
			tx=session.beginTransaction();
			Country country = session.get(Country.class, country_id);//returns object of country
			session.remove(country);
			tx.commit();
			deleteMsg="Country Deleted Successfully";
			
		}catch(Exception e) {
			if(tx!=null) {
				tx.rollback();
				e.printStackTrace();
			}
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return deleteMsg;
	}
//-----------------------------------------------------------------------------------------------------------
	
	public List<Country> getAllCountry() {
		Session session = null;
		Transaction tx=null;
        List<Country> list = null;		
		try {
			session = factory.openSession();
			tx=session.beginTransaction(); // returns object of transaction
			String hqlQuery = "from Country";
			
			Query<Country> query = session.createQuery(hqlQuery,Country.class);
			list=query.list();
			tx.commit();
		}
		catch(Exception e){
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return list;
	}

//-------------------------------------------------------------------------------------------------------
	public Country getParticularCountryById(int country_id) {
		Session session = null;
		Transaction tx=null;
		Country country=null;
		String str=null;
		
		try {
			session = factory.openSession();
			tx=session.beginTransaction();
		    country=session.get(Country.class, country_id);
		    tx.commit();
		}catch(Exception e) {
			if(tx!=null) {
			    str="No Such Country";
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return country;
	}

//---------------------------------------------------------------------------------------------------------------------------
	public String addEmployee(Employee emp) {
		
		Session session = null;
		Transaction tx = null;
		String msg=null;
		
		try {
			session=factory.openSession();
			tx=session.beginTransaction();
			
			session.persist(emp);
			tx.commit();
			msg="Employee Added Successfully";
			
		}catch(Exception e) {
			if(tx!=null) {
				tx.commit();
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.clear();
			}
		}
		return msg;
	}
//---------------------------------------------------------------------------------------------------------------

	public String updateEmployee(Employee emp, int id) {
		
		Session session = null;
		Transaction tx = null;
		String msg=null;
		
		try {
			session=factory.openSession();
			tx=session.beginTransaction();
			
			Employee employee =session.get(Employee.class, id);
			employee.setName(emp.getName());
			employee.setMobile_no(emp.getMobile_no());
			employee.setEmail_id(emp.getEmail_id());
			employee.setSalary(emp.getSalary());
			employee.setDepartment(emp.getDepartment());
			employee.setStatus(emp.getStatus());
			employee.setCreatedBy(emp.getCreatedBy());
			employee.setCreatedDate(emp.getCreatedDate());
			employee.setUpdatedBy(emp.getUpdatedBy());
			employee.setUpdatedDate(emp.getUpdatedDate());
			employee.setCountryObj(emp.getCountryObj());
			
			session.merge(employee);
			tx.commit();
			msg="Employee Record Updated";	
		}catch(Exception e) {
			if(tx!=null) {
				tx.rollback();;
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return msg;
	}
//-------------------------------------------------------------------------------------------------------------

	public List<Employee> getAllEmployees() {
		
		Session session = null;
		Transaction tx = null;
		List<Employee> list =null;
		
		try {
			session=factory.openSession();
			tx=session.beginTransaction();
			String hqlQuery = "from Employee";
			
			Query<Employee> query = session.createQuery(hqlQuery, Employee.class);
			list=query.list();
			tx.commit();
		}catch(Exception e) {
			if(tx!=null) {
				tx.rollback();;
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return list;
	}
//-----------------------------------------------------------------------------------------------------
public String deleteEmployee(int id) {
		Session session=null;
		Transaction tx=null;
		String msg=null;
		
		try {
			
			session=factory.openSession();
			tx=session.beginTransaction();
			
			Employee emp= session.get(Employee.class, id);
			session.remove(emp);
			tx.commit();
			msg="Employee is Deleted...";
		}catch (Exception e) {
			if(tx!=null) {
				tx.rollback();
			}
			e.printStackTrace();
		}finally {
			
			if(session!=null) {
				session.close();
			}
		}
		return msg;
	}

//-----------------------------------------------------------------------------------------------------------
	public Employee getParticularRecordById(int id) {
		Session session = null;
		Transaction tx=null;
		Employee emp = null;
	
		try {
			session = factory.openSession();
			tx=session.beginTransaction();
			
			emp = session.get(Employee.class, id);
			tx.commit();
		}catch(Exception e) {
			if(tx!=null) {
				tx.rollback();;
			}
			e.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return emp;
	}
//--------------------------------------------------------------------------------------------------------------------
	public Employee login(Employee e) {
		Session session = null;
		Transaction tx=null;
		Employee emp = null;
		
		try {
			session = factory.openSession();
			tx=session.beginTransaction();
			String hqlQuery = "from Employee where email_id=:email_id and mobile_no=:mobile_no";
			
			Query<Employee> query = session.createQuery(hqlQuery, Employee.class);
			query.setParameter("email_id", e.getEmail_id());
			query.setParameter("mobile_no", e.getMobile_no());
			
			emp = query.uniqueResult();
			tx.commit();
		}catch(Exception e1) {
			if(tx!=null) {
				tx.rollback();;
			}
			e1.printStackTrace();
		}finally {
			if(session!=null) {
				session.close();
			}
		}
		return emp;
	}
}

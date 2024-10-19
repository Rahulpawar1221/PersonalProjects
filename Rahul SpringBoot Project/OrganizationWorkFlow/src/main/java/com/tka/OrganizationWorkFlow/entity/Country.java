package com.tka.OrganizationWorkFlow.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Country {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int country_id;
	String country_name;
	
	public Country() {
	}

	public Country(String country_name) {
		super();
		this.country_name = country_name;
	}

	public int getCountry_id() {
		return country_id;
	}

	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}

	public String getCountry_name() {
		return country_name;
	}

	public void setCountry_name(String country_name) {
		this.country_name = country_name;
	}

	@Override
	public String toString() {
		return "Country [country_id=" + country_id + ", country_name=" + country_name + "]";
	}
	
	
}

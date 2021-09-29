package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "address")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Address {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "addressid")
	private int addressid;
	private String country;
	private String state;
	private String city;
	private String addr;
	private String landmark;
	private int pincode;
}

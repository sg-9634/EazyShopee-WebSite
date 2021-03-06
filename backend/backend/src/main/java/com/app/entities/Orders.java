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

@Entity
@Table(name ="orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "orderid")
	private int orderid;
	private double amount;
//	@OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "userid", referencedColumnName = "userid")
//	@OneToOne(cascade = CascadeType.ALL, optional = false)
//  @JoinColumn(name = "userid")
    private int userId;
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "addressid", referencedColumnName = "addressid")
	private int addressId;
	private int productId;
}
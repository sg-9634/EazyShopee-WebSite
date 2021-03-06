package com.app.dtos;


import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.app.entities.Address;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class AddressDto {
	private int addressid;
	private String country;
	private String state;
	private String city;
	private String addr;
	private String landmark;
	private int pincode;
    
    public static AddressDto fromEntity(Address address) {
		AddressDto dto = new AddressDto();
		BeanUtils.copyProperties(address, dto);
		dto.setAddressid(address.getAddressid());
		return dto;
	}
	
	// called from POST, PUT
	public static Address toEntity(AddressDto addressDto) {
		Address address = new Address();
		BeanUtils.copyProperties(addressDto, address);
		return address;
	}
}

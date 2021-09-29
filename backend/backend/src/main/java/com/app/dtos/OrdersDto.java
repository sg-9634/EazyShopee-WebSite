package com.app.dtos;

import java.time.LocalDateTime;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import com.app.entities.Orders;
import com.app.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class OrdersDto {
	private int orderid;
	private double amount;
	private LocalDateTime odate;
    private User user;
    
    public static OrdersDto fromEntity(Orders orders) {
		OrdersDto dto = new OrdersDto();
		BeanUtils.copyProperties(orders, dto);
		dto.setOrderid(orders.getOrderid());
		return dto;
	}
	
	// called from POST, PUT
	public static Orders toEntity(OrdersDto ordersDto) {
		Orders orders = new Orders();
		BeanUtils.copyProperties(ordersDto, orders);
		return orders;
	}
}

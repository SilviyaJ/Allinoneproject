package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Lapfeatures {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="sys_ID")
    private int lapID;
    @Column(name="sys_generation")
    private String model;
    @Column(name="sys_brand")
    private String brand;
    @Column(name="sys_cost")
    private int cost;
    @Column(name="sys_size")
    private double size;
}

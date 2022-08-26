package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Resourceinterface extends JpaRepository<Resource, Integer>{
	public Resource findByUsername(String username);

}

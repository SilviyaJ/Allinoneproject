package com.example.demo;

import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertLinesMatch;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;



@SpringBootTest
@RunWith(SpringRunner.class)
class ViyaWayApplicationTests {
	
	@MockBean
	Lapinterface repo;
	
	@Autowired
	Lapservice service;
	
	
	@Test
	public void testingByTypes() {
		String l1="realme";
		String l2="blackberry";
		String l3="apple";
		String l4="honor";
		
		List<String> check1=Stream.of(l1,l2,l3).collect(Collectors.toList());
		List<String> check2=Stream.of(l2,l3,l4).collect(Collectors.toList());
		List<String> check3=Stream.of(l1,l3,l4).collect(Collectors.toList());
		
		when(repo.findAllByTypes("fourth generation")).thenReturn(Stream.of(l1,l3,l4).collect(Collectors.toList()));
//		assertLinesMatch(check1, service.makeReadByType("fourth generation"));
		assertLinesMatch(check3 , service.makeReadByType("fourth generation"));
		
		
		
	}
	@Test
	public void testingByBrandAndSize() {
		Lapfeatures l1=new Lapfeatures (45,"third generation","hp",15000,13.5);
		Lapfeatures l2=new Lapfeatures(47,"second generation","asus",16000,17.5);
		Lapfeatures l3=new Lapfeatures (48,"third generation","hp",17000,19.5);
		
		when(repo.findAllByBrandAndSize("hp",13.5)).thenReturn(Stream.of(l1,l3).collect(Collectors.toList()));
		assertNotSame(l2,service.makeReadBrandAndSize("hp",13.5).get(0));
		
	}
	
	@Test
	public void testingAllByModel() {
		Lapfeatures l1=new Lapfeatures (45,"third generation","hp",15000,13.5);
		Lapfeatures l2=new Lapfeatures (47,"second generation","asus",16000,17.5);
		Lapfeatures l3=new Lapfeatures (48,"third generation","hp",17000,19.5);
		
		when(repo.findAllByModel("third generation")).thenReturn(Stream.of(l1,l3).collect(Collectors.toList()));
		assertNotEquals(l2,service.makeReadModeL("third generation").get(0));
		
	}
	
	@Test
	public void testingDelete() {
		Lapfeatures l1=new Lapfeatures (45,"third generation","hp",15000,13.5);
		repo.delete(l1);
		verify(repo,times(1)).delete(l1);
		
	}
	
	@Test
	public void testingRead() {
		Optional<Lapfeatures> l1=Optional.of(new Lapfeatures (45,"third generation","hp",15000,13.5));
		Optional<Lapfeatures> l2=Optional.of(new Lapfeatures(47,"second generation","asus",16000,17.5));
		
		when(repo.findById(45)).thenReturn(l1);
		when(repo.findById(47)).thenReturn(l2);
		
		assertEquals(l1,service.makeRead(45));
		assertTrue(service.makeRead(47).get().getBrand().equals(l2.get().getBrand()));
	
	}
	
	@Test
	public void testingCreate() {
		Lapfeatures l1=new Lapfeatures (45,"third generation","hp",15000,13.5);
		Lapfeatures l2=new Lapfeatures (47,"second generation","asus",16000,17.5);
		
		when(repo.save(l1)).thenReturn(l1);
		when(repo.save(l2)).thenReturn(l2);
		
//		assertTrue(service.makenew(l1).getBrand().equals("hp"));
//		assertNotNull(service.makenew(l2).getModel());
		
	}
	
	
	
	@Test
	public void testing() {
		Lapfeatures l1=new Lapfeatures (45,"third generation","hp",15000,13.5);
		Lapfeatures l2=new Lapfeatures (47,"second generation","asus",16000,17.5);
		Lapfeatures l3=null;
		
		when(repo.findAll()).thenReturn(Stream.of(l1,l2,l3).collect(Collectors.toList()));
		 assertSame(3,service.makeFetchAll().size());
		 assertNull(service.makeFetchAll().get(2));
	}

	@Test
	void contextLoads() {
	}

}

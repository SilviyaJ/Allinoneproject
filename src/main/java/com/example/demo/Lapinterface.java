package com.example.demo;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface Lapinterface extends JpaRepository<Lapfeatures, Integer> {
	public Optional<Lapfeatures> findByBrand(String brand);
    public List<Lapfeatures> findAllByModel(String model);
    
    @Transactional
    @Modifying
    @Query ("delete from Lapfeatures where model like %:own%")
    public void deleteAllByCustomise(String own);
    
    @Query("select brand from Lapfeatures where model like %:tp%")
    public List<String> findAllByTypesLikes(String tp);
    
    @Transactional
    @Modifying
    @Query ("update Lapfeatures set cost=cost*0.500 where brand=:bnnd")
    public void updatePriceByBrand (String bnnd);
    
    
    @Query ("from Lapfeatures where brand=:bnd and size>=:in")
    public List<Lapfeatures> findAllByBrandAndSize(String bnd,double in);
    
    @Query ("select brand from Lapfeatures where model=:gen")
    public List<String> findAllByTypes(String gen);

}

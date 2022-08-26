package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class Lapservice {
	@Autowired
	 Lapinterface obj;
	
	public List<String> makeDeleteCustom (String tp){
		List<String> tmp=obj.findAllByTypesLikes(tp);
		obj.deleteAllByCustomise(tp);
		return tmp;
	}
	
	public String makeDeleteKey(int key) {
		Lapfeatures l=obj.findById(key).orElse(null);
		String msg=l.getBrand()+"has deleted";
		obj.deleteById(key);
		return msg;
	}
	
	public void makeUpdate(String wet) {
		obj.updatePriceByBrand(wet);
	}
	
	public String makeDelete(Lapfeatures lapto) {
		String msg=lapto.getBrand()+"has deleted";
		obj.delete(lapto);
		return msg;
	}
	
	public List<String> makeReadByType(String as){
		return obj.findAllByTypes(as);
	}
	
	public List<Lapfeatures> makeReadBrandAndSize(String alpha,double beta){
		return obj.findAllByBrandAndSize(alpha, beta);
	}
	
	
	public List<Lapfeatures> makeReadModeL(String gell){
		
		return obj.findAllByModel(gell);
	}
	
	
	public Optional<Lapfeatures> makeReadBrand(String sell){
		return obj.findByBrand(sell);
		}
	
	
	
	//findById
	public Optional<Lapfeatures> makeRead(int key){
		return obj.findById(key);
		
	}
	
	//findAll
	public List<Lapfeatures> makeFetchAll(){
		return (List<Lapfeatures>) obj.findAll();
		
	}
	
	
	//save
	public Lapfeatures makenew(Lapfeatures lap) {
		return obj.save(lap);
		

}
}

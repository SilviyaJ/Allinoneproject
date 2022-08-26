package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/api")
public class Lapcontroller {
	@Autowired
	Lapservice service;
	
	@Autowired
    PasswordEncoder encoder;
	
	@Autowired
	ResourceService serv;
	
	@GetMapping("/skill")
	public int returnInt() {
		return 7000;
	}
	
	@PostMapping("/posting")
	public void money(@RequestBody Lapfeatures lapto) {
		System.out.println("received object is"+lapto);
	}
	
	@GetMapping("/play/{alpha}/{beta}")
	public void less(@PathVariable("alpha") String alpha,@PathVariable("beta") int beta) {
		System.out.println("received string is"+alpha+"and integer is"+beta);
	}
	
	@GetMapping("/haithere")
	public void say() {
		System.out.println("Backend connected");
	}
	
	@PostMapping("/signup")
	public Resource signingUp(@RequestBody Resource resource) {
		
		String newone=encoder.encode(resource.getPassword());
		resource.setPassword(newone);
		return serv.implementSave(resource);
		
	}
	
	@DeleteMapping("/delall/{tp}")
	public List<String> callingDeleteMany(@PathVariable("tp") String tp){
		return service.makeDeleteCustom(tp);
	}
	
	@DeleteMapping("/delid/{ind}")
	public String callingDeleteById(@PathVariable("ind") int ind) {
		return service.makeDeleteKey(ind);
	}
	
	@PutMapping("/up/{send}")
	public void callingUpdateByPrice(@PathVariable("send") String send) {
		service.makeUpdate(send);
	}
	
	@PutMapping("/up")
	public Lapfeatures callingUpdate (@RequestBody Lapfeatures lapt) {
		 return service.makenew(lapt);
	}
	
	@DeleteMapping("/del")
	public String callingDelete(@RequestBody Lapfeatures lp){
		return service.makeDelete(lp);
	}
	
	@GetMapping("/bygen/{will}")
	public List<String> callingReadMod(@PathVariable ("will") String will){
		return service.makeReadByType(will);
	}
	 
	@GetMapping("/bytwo/{one}/{two}")
	public List<Lapfeatures> callingReadTwo(@PathVariable("one") String one,@PathVariable("two") double two){
		return service.makeReadBrandAndSize(one, two);
	}
	
	@GetMapping("/bymodel/{hell}")
	public List<Lapfeatures> callingReadModel(@PathVariable("hell") String hell){
		return service.makeReadModeL(hell);
	}
	
	@GetMapping("/bybrand/{hell}")
	public Optional<Lapfeatures> callingReadBrand(@PathVariable("hell") String hell){
		return service.makeReadBrand(hell);
	}
	
	@GetMapping("/{hey}")
	public Optional<Lapfeatures> callingRead(@PathVariable("hey") int hey){
		return service.makeRead(hey);
	}
	
	@GetMapping("/")
	public List<Lapfeatures> callingOrder(){
		return service.makeFetchAll();
		
	}
	
	@PostMapping("/new")
	public Lapfeatures callingCreate (@RequestBody Lapfeatures lapt) {
		 return service.makenew(lapt);
	}

}

package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;




@Service
public class ResourceService implements UserDetailsService {
	
	@Autowired
	Resourceinterface repo;
	
	public Resource implementSave(Resource whole) {
		return repo.save(whole);
		
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Resource res=repo.findByUsername(username);
		if(res==null)
		{
			throw new UsernameNotFoundException("username notvalid");
		}
		return res;
	}

}

package com.Learn.DirectAuthFromDb.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.authentication.*;
import com.Learn.DirectAuthFromDb.Dto.UserDto;
import com.Learn.DirectAuthFromDb.Service.UserService;


@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
    private UserService userService;
	
	@Autowired
    private AuthenticationManager authenticationManager;

//------------------------------------------Register API-------------------------------------------------------------------	
	@PostMapping("/register")
	public String registerUser(@RequestBody UserDto userDto) {
		String msg = userService.registerUser(userDto);
		return msg;
	}
//------------------------------------------Login API----------------------------------------------------------------------
	@PostMapping("/login")
	public String loginUser(@RequestBody UserDto userDto) {
		
		try {
		Authentication authentication = authenticationManager
				                        .authenticate(new UsernamePasswordAuthenticationToken(userDto.getUsername(), userDto.getPassword()));
		
		    if(authentication.isAuthenticated()) {
		    	return "Login Succesfull";
		    }else {
		    	return "Login Failed";
		    }
		
		}catch(AuthenticationException e){
			return "Invaild Username Or Password...";
		}
	}
//-----------------------------------------------------------------------------------------------------------------------------
}

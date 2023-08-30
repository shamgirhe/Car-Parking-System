package com.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {

  
  @GetMapping("/admin")
  public String adminHome() {
    return "Welcome, Admin!";
  }
  
  @GetMapping("/user")
  public String userHome() {
    return "Welcome, User!";
  }
  
  @GetMapping("/security")
  public String securityHome() {
    return "Welcome, Security!";
  }

}

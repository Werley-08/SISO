package com.siso.siso.controller;

import com.siso.siso.dto.auth.AuthDTO;
import com.siso.siso.service.AuthService;
import com.siso.siso.service.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
public class AuthController{

    private final IAuthService authService;

    @Autowired
    AuthController(AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/logar")
    public ResponseEntity logar(@RequestBody AuthDTO usuario){
        return authService.logar(usuario);
    }
}
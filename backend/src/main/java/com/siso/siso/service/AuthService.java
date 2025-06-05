package com.siso.siso.service;

import com.siso.siso.dto.auth.AuthDTO;
import com.siso.siso.dto.response.AuthResponseDTO;
import com.siso.siso.model.Usuario;
import com.siso.siso.security.service.TokenService;
import com.siso.siso.service.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements IAuthService{

    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    @Autowired
    public AuthService(AuthenticationManager authenticationManager, TokenService tokenService) {
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    @Override
    public ResponseEntity logar(AuthDTO usuario){

        var usuarioSenha = new UsernamePasswordAuthenticationToken(usuario.getUsername(),usuario.getSenha());
        var auth = authenticationManager.authenticate(usuarioSenha);
        var token = tokenService.generatedToken((Usuario) auth.getPrincipal());
        return ResponseEntity.ok(new AuthResponseDTO(token));
    }
}
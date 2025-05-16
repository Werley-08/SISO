package com.siso.siso.service.interfaces;

import com.siso.siso.dto.auth.AuthDTO;
import org.springframework.http.ResponseEntity;

public interface IAuthService {

    ResponseEntity logar(AuthDTO usuario);
}
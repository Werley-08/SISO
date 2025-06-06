package com.siso.siso.controller;

import com.siso.siso.dto.auth.AuthDTO;
import com.siso.siso.dto.response.AuthResponseDTO;
import com.siso.siso.security.configuration.SecurityConfigurationsTests;
import com.siso.siso.security.filter.SecurityFilter;
import com.siso.siso.service.AuthService;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static io.restassured.module.mockmvc.RestAssuredMockMvc.standaloneSetup;
import static org.hamcrest.Matchers.instanceOf;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@WebMvcTest(AuthController.class)
@Import(SecurityConfigurationsTests.class)
@ActiveProfiles("test")
public class AuthControllerTest {

    @Autowired
    private AuthController authController;

    @MockBean
    private AuthService authService;

    @MockBean
    private SecurityFilter securityFilter;

    @BeforeEach
    public void setUp() {
        standaloneSetup(this.authController);
    }

    @Test
    @DisplayName("Should successfully log in to the system")
    public void logarTest1() {

        AuthDTO authDTO = new AuthDTO("username", "senha");
        AuthResponseDTO authResponseDTO = new AuthResponseDTO("ABCDEFGH");

        when(this.authService.logar(any(AuthDTO.class)))
                .thenReturn(ResponseEntity.ok(authResponseDTO));

        given()
                .contentType(ContentType.JSON)
                .body(authDTO)

                .when()
                .post("/api/auth/logar")

                .then()
                .statusCode(HttpStatus.OK.value())
                .body("token", instanceOf(String.class));
    }
}
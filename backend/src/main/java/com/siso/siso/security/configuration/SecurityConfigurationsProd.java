package com.siso.siso.security.configuration;

import com.siso.siso.security.filter.SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
@Profile("prod")
public class SecurityConfigurationsProd{

    private final SecurityFilter securityFilter;

    @Autowired
    public SecurityConfigurationsProd(SecurityFilter securityFilter) {
        this.securityFilter = securityFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, CorsConfigurationSource corsConfigurationSource) throws Exception {
        return httpSecurity
                .cors(cors -> cors.configurationSource(corsConfigurationSource))
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize

                        // Auth endpoints
                        .requestMatchers(HttpMethod.POST, "/api/auth/logar").permitAll()

                        // Recepcionista endpoints
                        .requestMatchers(HttpMethod.POST, "/api/recepcionista/cadastrar").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.GET, "/api/recepcionista/visualizar/{id}").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.GET, "/api/recepcionista/visualizarTodos").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.PUT, "/api/recepcionista/editar/{id}").hasAnyRole("ADMIN", "RECEPCIONISTA")

                        // Profissional da Saúde endpoints
                        .requestMatchers(HttpMethod.POST, "/api/profissionalDaSaude/cadastrar").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.GET, "/api/profissionalDaSaude/visualizar/{id}").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.GET, "/api/profissionalDaSaude/visualizarTodos").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.PUT, "/api/profissionalDaSaude/editar/{id}").hasAnyRole("ADMIN", "RECEPCIONISTA")

                        // Especialidade endpoints
                        .requestMatchers(HttpMethod.POST, "/api/especialidade/cadastrar").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.PUT, "/api/especialidade/editar/{id}").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.GET, "/api/especialidade/visualizarTodos").hasAnyRole("ADMIN", "RECEPCIONISTA")

                        // Pacientes endpoinst
                        .requestMatchers(HttpMethod.POST, "/api/paciente/cadastrar").hasAnyRole("ADMIN", "RECEPCIONISTA")
                        .requestMatchers(HttpMethod.GET, "/api/paciente/visualizarTodos").hasAnyRole("ADMIN", "RECEPCIONISTA", "PROFISSIONAL_DA_SAUDE")

                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
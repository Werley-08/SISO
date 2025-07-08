package com.siso.siso.repository;

import com.siso.siso.model.Anamnese;
import com.siso.siso.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnamneseRepository extends JpaRepository<Anamnese, Integer> {
    Optional<Anamnese> findByPaciente(Paciente paciente);
}
package com.siso.siso.repository;

import com.siso.siso.model.Anamnese;
import com.siso.siso.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnamneseRepository extends JpaRepository<Anamnese, Integer> {
    Optional<Anamnese> findByPaciente(Paciente paciente);
}
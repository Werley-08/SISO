package com.siso.siso.repository;

import com.siso.siso.model.Paciente;
import com.siso.siso.model.Tratamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TratamentoRepository extends JpaRepository<Tratamento, Integer> {
    List<Tratamento> findByPaciente(Paciente paciente);
}
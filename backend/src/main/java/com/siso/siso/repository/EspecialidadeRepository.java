package com.siso.siso.repository;

import com.siso.siso.model.Especialidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EspecialidadeRepository extends JpaRepository<Especialidade, Integer> {

    Optional<Especialidade> findByNome(String nome);
}

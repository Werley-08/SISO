package com.siso.siso.repository.interfaces;

import com.siso.siso.model.Anamnese;

import java.util.Optional;

public interface IAnamneseRepository {
    Anamnese save(Anamnese anamnese);
    Optional<Anamnese> findById(Integer id);

}

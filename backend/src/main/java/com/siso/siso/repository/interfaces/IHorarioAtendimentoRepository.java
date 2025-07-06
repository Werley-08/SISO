package com.siso.siso.repository.interfaces;

import com.siso.siso.model.HorarioAtendimento;

import java.util.Optional;

public interface IHorarioAtendimentoRepository {
    Optional<HorarioAtendimento> findById(Integer id);
}
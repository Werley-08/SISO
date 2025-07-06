package com.siso.siso.service.interfaces;

import com.siso.siso.model.HorarioAtendimento;
import com.siso.siso.model.ProfissionalDaSaude;

public interface IHorarioAtendimentoService {

    ProfissionalDaSaude cadastrarHorarioAtendimento(Integer idProfissional, HorarioAtendimento horarioAtendimento);
}
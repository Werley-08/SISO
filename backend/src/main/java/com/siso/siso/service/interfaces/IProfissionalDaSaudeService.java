package com.siso.siso.service.interfaces;

import com.siso.siso.model.ProfissionalDaSaude;

public interface IProfissionalDaSaudeService{
    ProfissionalDaSaude cadastrarProfissionalDaSaude(ProfissionalDaSaude profissionalDaSaude);
    ProfissionalDaSaude visualizarProfissionalDaSaude(Integer id);
}
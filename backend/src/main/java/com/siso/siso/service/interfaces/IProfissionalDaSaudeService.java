package com.siso.siso.service.interfaces;

import com.siso.siso.model.ProfissionalDaSaude;

import java.util.List;

public interface IProfissionalDaSaudeService{
    ProfissionalDaSaude cadastrarProfissionalDaSaude(ProfissionalDaSaude profissionalDaSaude);
    ProfissionalDaSaude visualizarProfissionalDaSaude(Integer id);
    List<ProfissionalDaSaude> visualizarProfissionaisDaSaude();
}
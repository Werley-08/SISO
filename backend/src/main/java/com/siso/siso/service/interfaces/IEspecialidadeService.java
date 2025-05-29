package com.siso.siso.service.interfaces;

import com.siso.siso.model.Especialidade;

import java.util.List;

public interface IEspecialidadeService {

    Especialidade cadastrarEspecialidade(Especialidade especialidade);

    Especialidade editarEspecialidade(Integer id, Especialidade especialidade);

    List<Especialidade> visualizarEspecialidades();
}

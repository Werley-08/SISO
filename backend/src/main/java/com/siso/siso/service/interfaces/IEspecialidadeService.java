package com.siso.siso.service.interfaces;

import com.siso.siso.model.Especialidade;

public interface IEspecialidadeService {

    Especialidade cadastrarEspecialidade(Especialidade especialidade);

    Especialidade editarEspecialidade(int id, Especialidade especialidade);
}

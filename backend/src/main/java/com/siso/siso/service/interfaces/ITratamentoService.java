package com.siso.siso.service.interfaces;

import com.siso.siso.model.Paciente;
import com.siso.siso.model.Tratamento;

import java.util.List;

public interface ITratamentoService {

    Tratamento cadastrarTratamento(Tratamento tratamento);
    List<Tratamento> visualizarTratamentoByPaciente(Integer id_paciente);
    Tratamento visualizarTratamentoById(Integer id_tratamento);
}
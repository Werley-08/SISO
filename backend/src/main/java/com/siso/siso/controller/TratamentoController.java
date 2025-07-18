package com.siso.siso.controller;

import com.siso.siso.dto.create.TratamentoCreateDTO;
import com.siso.siso.dto.response.TratamentoResponseDTO;
import com.siso.siso.dto.update.TratamentoUpdateDTO;
import com.siso.siso.service.interfaces.ITratamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.siso.siso.mapper.TratamentoMapper.toDTO;
import static com.siso.siso.mapper.TratamentoMapper.toModel;

@RestController
@RequestMapping("/api/tratamento")
public class TratamentoController {

    private final ITratamentoService tratamentoService;

    @Autowired
    public TratamentoController(ITratamentoService tratamentoService) {
        this.tratamentoService = tratamentoService;
    }

    @PostMapping("/cadastrar")
    public TratamentoResponseDTO cadastrarTratamento(@RequestBody TratamentoCreateDTO tratamentoCreateDTO) {
        return toDTO(tratamentoService.cadastrarTratamento(toModel(tratamentoCreateDTO)));
    }

    @GetMapping("/visualizarTodosByPaciente/{id_paciente}")
    public List<TratamentoResponseDTO> visualizarTratamentoByPaciente(@PathVariable Integer id_paciente) {
        return toDTO(tratamentoService.visualizarTratamentoByPaciente(id_paciente));
    }

    @GetMapping("/visualizarById/{id_tratamento}")
    public TratamentoResponseDTO visualizarTratamentoById(@PathVariable Integer id_tratamento) {
        return toDTO(tratamentoService.visualizarTratamentoById(id_tratamento));
    }

    @PutMapping("/anotacoes/{id_tratamento}")
    public TratamentoResponseDTO atualizarAnotacoes(@RequestBody TratamentoUpdateDTO tratamentoUpdateDTO, @PathVariable Integer id_tratamento) {
        return toDTO(tratamentoService.atualizarAnotacoes(toModel(tratamentoUpdateDTO), id_tratamento));
    }
}
package com.siso.siso.controller;

import com.siso.siso.dto.create.HorarioAtendimentoCreateDTO;
import com.siso.siso.dto.response.ProfissionalDaSaudeResponseDTO;
import com.siso.siso.service.interfaces.IHorarioAtendimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static com.siso.siso.mapper.HorarioAtendimentoMapper.toModel;
import static com.siso.siso.mapper.ProfissionalDaSaudeMapper.toDTO;

@RestController
@RequestMapping("api/horarioAtendimento")
public class HorarioAtendimentoController{

    private final IHorarioAtendimentoService horarioAtendimentoService;

    @Autowired
    public HorarioAtendimentoController(IHorarioAtendimentoService horarioAtendimentoService) {
        this.horarioAtendimentoService = horarioAtendimentoService;
    }

    @PostMapping("/cadastrar/{idProfissional}")
    public ProfissionalDaSaudeResponseDTO cadastrarHorarioAtendimento(@RequestBody HorarioAtendimentoCreateDTO horarioAtendimentoDTO,
                                                                      @PathVariable Integer idProfissional) {
        return toDTO(horarioAtendimentoService.cadastrarHorarioAtendimento(idProfissional, toModel(horarioAtendimentoDTO)));
    }

    @DeleteMapping("/deletar/{id}")
    public void deletarHorarioAtendimento(@PathVariable Integer id) {
        horarioAtendimentoService.deletarHorarioAtendimento(id);
    }
}
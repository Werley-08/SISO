package com.siso.siso.controller;

import com.siso.siso.dto.create.SessaoCreateDTO;
import com.siso.siso.dto.response.SessaoResponseDTO;
import com.siso.siso.dto.response.TratamentoResponseDTO;
import com.siso.siso.dto.update.SessaoUpdateDTO;
import com.siso.siso.mapper.SessaoMapper;
import com.siso.siso.service.interfaces.ISessaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.siso.siso.mapper.SessaoMapper.toModel;
import static com.siso.siso.mapper.TratamentoMapper.toDTO;
import static com.siso.siso.mapper.SessaoMapper.toDTO;
import static com.siso.siso.utils.DateFormatter.formatDate;

@RestController
@RequestMapping("/api/sessao")
public class SessaoController {

    private final ISessaoService sessaoService;

    @Autowired
    public SessaoController(ISessaoService sessaoService) {
        this.sessaoService = sessaoService;
    }

    @PostMapping("/cadastrar/{id_tratamento}")
    public TratamentoResponseDTO cadastrarSessao(@RequestBody SessaoCreateDTO sessaoCreateDTO, @PathVariable Integer id_tratamento) {
        return toDTO(sessaoService.cadastrarSessao(toModel(sessaoCreateDTO), id_tratamento));
    }

    @GetMapping("visualizar")
    public List<SessaoResponseDTO> visualizarSessao(@RequestParam String data) {
        return toDTO(sessaoService.visualizarSessao(formatDate(data)));
    }

    @PutMapping("/anotacoes/{id_sessao}")
    public SessaoResponseDTO atualizarAnotacoes(@RequestBody SessaoUpdateDTO sessaoUpdateDTO, @PathVariable Integer id_sessao) {
        return toDTO(sessaoService.atualizarAnotacoes(SessaoMapper.toModel(sessaoUpdateDTO), id_sessao));
    }

    @PutMapping("/cancelar/{id_sessao}")
    public SessaoResponseDTO cancelarSessao(@PathVariable Integer id_sessao) {
        return toDTO(sessaoService.cancelarSessao(id_sessao));
    }

    @PutMapping("/concluir/{id_sessao}")
    public SessaoResponseDTO concluirSessao(@PathVariable Integer id_sessao) {
        return toDTO(sessaoService.concluirSessao(id_sessao));
    }
}
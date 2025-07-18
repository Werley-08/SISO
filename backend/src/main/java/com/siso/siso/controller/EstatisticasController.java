package com.siso.siso.controller;

import com.siso.siso.service.interfaces.IEstatisticasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/estatisticas")
public class EstatisticasController {

    private final IEstatisticasService estatisticasService;

    @Autowired
    public EstatisticasController(IEstatisticasService estatisticasService) {
        this.estatisticasService = estatisticasService;
    }

    @GetMapping("/visualizarQtdPacientes")
    public Long visualizarQtdPacientes() {
        return estatisticasService.visualizarQtdPacientes();
    }

    @GetMapping("/visualizarQtdAgendamentos")
    public Long visualizarQtdAgendamentos() {
        return estatisticasService.visualizarQtdAgendamentos();
    }
}
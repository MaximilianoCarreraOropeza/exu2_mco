package mco.exu2.server.modules.controller;

import mco.exu2.server.modules.models.SumarDto;
import mco.exu2.server.modules.service.SumaService;
import mco.exu2.server.utils.APIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SumaController {
    private SumaService sumaService;

    @Autowired
    public SumaController(SumaService sumaService) {
        this.sumaService = sumaService;
    }

    @PostMapping("/")
    public ResponseEntity<APIResponse> sumar(@RequestBody SumarDto dto) {
        return sumaService.doSuma(dto);
    }


}

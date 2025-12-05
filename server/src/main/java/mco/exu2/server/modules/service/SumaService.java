package mco.exu2.server.modules.service;

import mco.exu2.server.modules.models.SumarDto;
import mco.exu2.server.utils.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SumaService {
    public ResponseEntity<APIResponse> doSuma(SumarDto dto){
        double resultado = dto.getNum1() + dto.getNum2();
        APIResponse response =
                new APIResponse(200, "Suma realizada con exito", resultado);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

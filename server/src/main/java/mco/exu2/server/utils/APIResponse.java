package mco.exu2.server.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class APIResponse {
    private int status;
    private String message;
    private Object data;

    public APIResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

}

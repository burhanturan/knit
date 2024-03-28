package com.knitsoftware.backend.config;

import com.knitsoftware.backend.payload.dto.AdminDTO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CreateObjectBean {

    //    The DTO beans will be created using @Bean
    @Bean
    public AdminDTO adminDTO(){
        return new AdminDTO();
    }

}

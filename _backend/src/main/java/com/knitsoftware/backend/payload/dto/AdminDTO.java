package com.knitsoftware.backend.payload.dto;

import com.knitsoftware.backend.entity.Admin;
import com.knitsoftware.backend.payload.request.AdminRequest;
import com.knitsoftware.backend.payload.response.AdminResponse;
import lombok.*;

@Data
public class AdminDTO {

    public Admin mapAdminRequestToAdmin(AdminRequest adminRequest){

        return Admin.builder()
                .firstname(adminRequest.getFirstname())
                .lastname(adminRequest.getLastname())
                .email(adminRequest.getEmail())
                .username(adminRequest.getUsername())
                .build();
    }
    public AdminResponse mapAdminToAdminResponse(Admin admin){

        return AdminResponse.builder()
                .id(admin.getId())
                .username(admin.getUsername())
                .email(admin.getEmail())
                .firstname(admin.getFirstname())
                .lastname(admin.getLastname())
                .roles(admin.getRoles())
                .build();
    }
}

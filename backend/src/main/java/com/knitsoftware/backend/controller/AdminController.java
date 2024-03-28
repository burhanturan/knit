package com.knitsoftware.backend.controller;

import com.knitsoftware.backend.entity.Admin;
import com.knitsoftware.backend.service.AdminService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/save")
    public ResponseEntity<Admin> saveAdmin(@Valid @RequestBody Admin adminRequest){
        adminService.save(adminRequest);

        return ResponseEntity.ok(adminRequest);
    }

}

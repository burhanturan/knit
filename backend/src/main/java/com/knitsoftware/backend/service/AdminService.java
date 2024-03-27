package com.knitsoftware.backend.service;

import com.knitsoftware.backend.entity.Admin;
import com.knitsoftware.backend.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    public Admin save(Admin adminRequest) {
        return adminRepository.save(adminRequest);
    }
}

package com.knitsoftware.backend.payload.response;

import com.knitsoftware.backend.entity.UserRole;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminResponse {

    private Long id;
    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private Set<UserRole> roles;

}

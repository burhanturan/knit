package com.knitsoftware.backend.entity;

import com.knitsoftware.backend.entity.abstracts.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "admins")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class Admin extends User {

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "t_admin_role",
            joinColumns = @JoinColumn(name = "admin_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<UserRole> roles = new HashSet<>();

}

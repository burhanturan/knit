package com.knitsoftware.backend.payload.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AdminRequest {

    @Pattern(regexp = "^(?!\\s)(?!.*\\s$)[a-zA-Z\\s]{2,}$", message = "Your username must consist of the characters.")
    @NotNull(message = "Please enter your username")
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Size(min = 8, max = 60, message = "Enter your password")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&)(:;,./*!?}_{-]).{8,}$",
            message = "Your password must be at least 8 characters including at least one " +
                    "special character @#$%^&+=)(:;,./*!?}_{- one uppercase, " +
                    "one lowercase letter and one number (example: User+99?)")
    private String password;

    @Pattern(regexp = "^(?!\\s)(?!.*\\s$)[a-zA-Z\\s]{2,}$", message = "Your lastname must consist of the characters.")
    @NotNull(message = "Please enter your lastname")
    private String firstname;

    @Pattern(regexp = "^(?!\\s)(?!.*\\s$)[a-zA-Z\\s]{2,}$", message = "Your lastname must consist of the characters.")
    @NotNull(message = "Please enter your lastname")
    private String lastname;

    @NotNull(message = "Please enter your email")
    @Size(min = 4, max = 50, message = "Your email should be at least 4 chars")
    private String email;
}

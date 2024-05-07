package com.knitsoftware.backend.contactmessage.dto;

import jakarta.validation.constraints.Email;
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
@Builder(toBuilder = true)
public class ContactMessageRequest {

    @NotNull(message = "Please enter name")
    @Size(min=3 , max=16 , message = "Your name should be at least 3 chars")
    @Pattern(regexp = "\\A(?!\\s*\\Z).+", message = "Your name must consist of the character.")
    private String name;

    @NotNull (message = "Please enter email")
    @Size (min=5 , max=20 , message = "Your email should be at least 5 chars")
    @Email(message = "Please enter valid email")
    //@Column (nullable = false, unique = true, length = ) Entity olmadığı için buna gerek yok DTO ların içinde entity class olmaz
    private String email;

    @NotNull (message = "Please enter subject")
    @Size (min=3 , max=20 , message = "Your subject should be at least 3 chars")
    @Pattern(regexp = "\\A(?!\\s*\\Z).+", message = "Your subject must consist of the character.")
    private String subject;

    @NotNull (message = "Please enter name")
    @Size (min=4 , max=50 , message = "Your message should be at least 3 chars")
    @Pattern(regexp = "\\A(?!\\s*\\Z).+", message = "Your message must consist of the character.")
    private String message;

}

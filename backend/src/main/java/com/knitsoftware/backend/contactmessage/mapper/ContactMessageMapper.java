package com.knitsoftware.backend.contactmessage.mapper;

import com.knitsoftware.backend.contactmessage.dto.ContactMessageRequest;
import com.knitsoftware.backend.contactmessage.dto.ContactMessageResponse;
import com.knitsoftware.backend.contactmessage.entity.ContactMessage;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;



@Component
public class ContactMessageMapper {

    public ContactMessage mapContactMessageRequestToContactMessage  (ContactMessageRequest contactMessageRequest){
        return ContactMessage.builder()
                .firstName(contactMessageRequest.getFirstName())
                .email(contactMessageRequest.getEmail())
                .lastName(contactMessageRequest.getLastName())
                .message(contactMessageRequest.getMessage())
                .dateTime(LocalDateTime.now())
                .build();
    }

    public ContactMessageResponse mapContactMessageToContactMessageResponse (ContactMessage contactMessage){

        return ContactMessageResponse.builder()
                .firstName(contactMessage.getFirstName())
                .email(contactMessage.getEmail())
                .lastName(contactMessage.getLastName())
                .message(contactMessage.getMessage())
                .dateTime(LocalDateTime.now())
                .build();

    }
}

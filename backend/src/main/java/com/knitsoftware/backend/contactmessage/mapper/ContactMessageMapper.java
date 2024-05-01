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
                .name(contactMessageRequest.getName())
                .email(contactMessageRequest.getEmail())
                .subject(contactMessageRequest.getSubject())
                .message(contactMessageRequest.getMessage())
                .dateTime(LocalDateTime.now())
                .build();
    }

    public ContactMessageResponse mapContactMessageToContactMessageResponse (ContactMessage contactMessage){

        return ContactMessageResponse.builder()
                .name(contactMessage.getName())
                .email(contactMessage.getEmail())
                .subject(contactMessage.getSubject())
                .message(contactMessage.getMessage())
                .dateTime(LocalDateTime.now())
                .build();

    }
}

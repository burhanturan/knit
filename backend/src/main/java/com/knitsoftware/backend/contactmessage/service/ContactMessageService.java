package com.knitsoftware.backend.contactmessage.service;

import com.knitsoftware.backend.contactmessage.dto.ContactMessageRequest;
import com.knitsoftware.backend.contactmessage.dto.ContactMessageResponse;
import com.knitsoftware.backend.contactmessage.entity.ContactMessage;
import com.knitsoftware.backend.contactmessage.exception.ResourceNotFoundException;
import com.knitsoftware.backend.contactmessage.mapper.ContactMessageMapper;
import com.knitsoftware.backend.contactmessage.message.Messages;
import com.knitsoftware.backend.contactmessage.repository.ContactMessageRepository;
import com.knitsoftware.backend.payload.response.ResponseMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ContactMessageService {

    private final ContactMessageRepository contactMessageRepository;
    private final ContactMessageMapper contactMessageMapper;

    // *** save() ********************************************
    public ResponseMessage<ContactMessageResponse> save(ContactMessageRequest contactMessageRequest) {

        ContactMessage contactMessage = contactMessageMapper.mapContactMessageRequestToContactMessage(contactMessageRequest);
        ContactMessage savedContactMessage = contactMessageRepository.save(contactMessage);

        return ResponseMessage.<ContactMessageResponse>builder()
                .message("Contact Message Created Successfully")
                .httpStatus(HttpStatus.CREATED)
                .object(contactMessageMapper.mapContactMessageToContactMessageResponse(savedContactMessage))
                .build();
    }

    // *** getAll() ******************************************
    public Page<ContactMessageResponse> getAll(int page, int size, String sort, String type) {

        Pageable pageable = PageRequest.of(page, size, Sort.by(sort).ascending());

        if (Objects.equals(type, "desc")) {
            pageable = PageRequest.of(page, size, Sort.by(sort).descending());
        }

        return contactMessageRepository
                .findAll(pageable)
                .map(contactMessageMapper::mapContactMessageToContactMessageResponse);

    }

    // *** GetById() ********** //NOT: getByIdParam ************
    // pojo döndürdük ki delete için bu metodu kullanabiliriz

    public ContactMessage getContactMessageById(Long contactMessageId) {
        return contactMessageRepository.findById(contactMessageId).orElseThrow(() ->
                new ResourceNotFoundException(Messages.NOT_FOUND_EXCEPTION));

    }


}

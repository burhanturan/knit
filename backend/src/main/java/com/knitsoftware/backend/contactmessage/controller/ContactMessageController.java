package com.knitsoftware.backend.contactmessage.controller;

import com.knitsoftware.backend.contactmessage.dto.ContactMessageRequest;
import com.knitsoftware.backend.contactmessage.dto.ContactMessageResponse;
import com.knitsoftware.backend.contactmessage.entity.ContactMessage;
import com.knitsoftware.backend.contactmessage.service.ContactMessageService;
import com.knitsoftware.backend.payload.response.ResponseMessage;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/contactMessages")
@RequiredArgsConstructor

public class ContactMessageController {

    private final ContactMessageService contactMessageService;

    // *** save() ********************************************

    @PostMapping  ("/save") // http://localhost:8080/contactMessages/save
    public ResponseMessage<ContactMessageResponse> save(@RequestBody @Valid ContactMessageRequest contactMessageRequest){
        return contactMessageService.save(contactMessageRequest);
    }

    // *** getAll() ******************************************

    @GetMapping("getAll") //

    public Page<ContactMessageResponse> getAll ( @RequestParam(value = "page", defaultValue = "0") int page,
                                                 @RequestParam(value = "size", defaultValue = "10") int size,
                                                 @RequestParam(value = "sort", defaultValue = "dateTime") String sort,
                                                 @RequestParam(value = "type", defaultValue = "desc") String type){

           return contactMessageService.getAll(page,size,sort,type);
    }

    // *** GetById() ******************************************

    @GetMapping ("/getById/{contactMessageId}")
    public ResponseEntity<ContactMessage> getByIdPath(@PathVariable Long contactMessageId){

        return ResponseEntity.ok(contactMessageService.getContactMessageById(contactMessageId));

        }


    //NOT: getByIdParam *******************************************

    @GetMapping("/getByIdParam")
    public ResponseEntity<ContactMessage> getByIdParam(@RequestParam(value = "contactMessageId") Long contactMessageId){
        return ResponseEntity.ok(contactMessageService.getContactMessageById(contactMessageId));
    }


}


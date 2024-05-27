package com.knitsoftware.backend.contactmessage.repository;

import com.knitsoftware.backend.contactmessage.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {



}

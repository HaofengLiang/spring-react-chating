package com.springreact.chating.repositories;

import com.springreact.chating.models.Message;
import com.springreact.chating.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MessageRepository extends CrudRepository<Message, Long> {
    String findMessagesByUsersQuery =
            "SELECT * FROM message m WHERE \n" +
            "\t(m.from_id = :user_id1 AND m.to_id = :user_id2) OR\n" +
            "  (m.from_id = :user_id2 AND m.to_id = :user_id1)\n" +
            "  ORDER BY sent_at;";

    @Query(value = findMessagesByUsersQuery, nativeQuery = true)
    List<Message> findMessagesByUsers(@Param("user_id1") Long userId1, @Param("user_id2")Long userId2);
}

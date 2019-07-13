package com.springreact.chating.repositories;

import com.springreact.chating.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}

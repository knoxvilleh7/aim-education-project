package com.aimprosoft.timetracking.service;

import com.aimprosoft.timetracking.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "userService")
public interface UserService {

    List<User> findAll();

    User save(User user);

    List<User> save(List<User> userList);

    User findOne(Long id);

    boolean exists(Long id);

    List<User> findAll(List<Long> idList);

    long count();

    void delete(Long id);

    void deleteAll();
}

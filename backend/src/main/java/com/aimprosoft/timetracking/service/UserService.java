package com.aimprosoft.timetracking.service;

import com.aimprosoft.timetracking.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    List<User> getAllUsers();
}

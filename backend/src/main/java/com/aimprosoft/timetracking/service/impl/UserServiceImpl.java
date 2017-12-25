package com.aimprosoft.timetracking.service.impl;

import com.aimprosoft.timetracking.dao.UserRepository;
import com.aimprosoft.timetracking.model.User;
import com.aimprosoft.timetracking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> save(List<User> userList) {
        return userRepository.save(userList);
    }

    @Override
    public User findOne(Long id) {
        return userRepository.findOne(id);
    }

    @Override
    public boolean exists(Long id) {
        return userRepository.exists(id);
    }

    @Override
    public List<User> findAll(List<Long> idList) {
        return userRepository.findAll(idList);
    }

    @Override
    public long count() {
        return userRepository.count();
    }

    @Override
    public void delete(Long id) {
        userRepository.delete(id);
    }

    @Override
    public void deleteAll() {
        userRepository.deleteAll();
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

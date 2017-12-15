package com.aimprosoft.timetracking.service.impl;

import com.aimprosoft.timetracking.dao.Dao;
import com.aimprosoft.timetracking.model.User;
import com.aimprosoft.timetracking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    private Dao dao;

    @Override
    @SuppressWarnings("unchecked")
    public List<User> getAllUsers() {
        return dao.findAll();
    }

    @Autowired
    @Qualifier("userDaoImpl")
    public void setDao(Dao dao) {
        this.dao = dao;
    }
}

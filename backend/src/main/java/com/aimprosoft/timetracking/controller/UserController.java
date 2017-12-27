package com.aimprosoft.timetracking.controller;

import com.aimprosoft.timetracking.model.User;
import com.aimprosoft.timetracking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = ControllerConstants.Views.User.Title)
public class UserController {

    private UserService userService;

    @RequestMapping(ControllerConstants.Views.User.GetAll)
    public List<User> allUsers() {
        return userService.findAll();
    }

    @RequestMapping(ControllerConstants.Views.User.Create)
    public User createUser(@RequestParam final String param) {
        User user = new User();
        user.setEmail(param);
        user.setUserName(param);
        user.setLogin(param);
        user.setPassword( new BCryptPasswordEncoder().encode(param) );
        user.setRmLogin(param);
        user.setRmPassword(param);
        user.setEnabled(true);
        return userService.save(user);
    }

    @RequestMapping(ControllerConstants.Views.User.Delete)
    public void createUser(@RequestParam final Long id) {
        userService.delete(id);
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}

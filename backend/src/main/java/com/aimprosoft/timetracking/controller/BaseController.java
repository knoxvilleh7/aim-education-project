package com.aimprosoft.timetracking.controller;

import com.aimprosoft.timetracking.model.User;
import com.aimprosoft.timetracking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created on 06.12.17.
 */
@Controller
public class BaseController {

    private UserService userService;

    @RequestMapping("/ping")
    @ResponseBody
    public String ping() {
        return "success";
    }

    @RequestMapping("/api/allUsers")
    @ResponseBody
    public List<User> allUsers() {
        return userService.getAllUsers();
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}

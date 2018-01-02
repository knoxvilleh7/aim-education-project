package com.aimprosoft.timetracking.service.impl;

import com.aimprosoft.timetracking.dao.UserRepository;
import com.aimprosoft.timetracking.dao.UserRoleRepository;
import com.aimprosoft.timetracking.model.CustomUserDetails;
import com.aimprosoft.timetracking.model.User;
import com.aimprosoft.timetracking.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    private RoleService roleService;
    private UserRepository userRepository;
    private UserRoleRepository userRolesRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = userRepository.findByLogin(login);
        if (null == user) {
            throw new UsernameNotFoundException("No user present with login: " + login);
        } else {
            List<Long> userRoles = userRolesRepository.findUserRoleByUserLogin(login);
            List<String> userRoleNames = roleService.getRoleNamesByIds(userRoles);
            return userDetailsConverter(user, userRoleNames);
        }
    }

    private CustomUserDetails userDetailsConverter(User user, List<String> userRoleNames) {
        CustomUserDetails userDetails = new CustomUserDetails();
        userDetails.setUserName(user.getUserName());
        userDetails.setUserRoles(userRoleNames);
        userDetails.setPassword(user.getPassword());
        userDetails.setLogin(user.getLogin());
        userDetails.setEmail(user.getEmail());
        userDetails.setEnabled(user.isEnabled());
        userDetails.setId(user.getId());
        userDetails.setRmLogin(user.getRmLogin());
        userDetails.setRmPassword(user.getRmPassword());

        return userDetails;
    }

    @Autowired
    public void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }

    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    public void setUserRolesRepository(UserRoleRepository userRolesRepository) {
        this.userRolesRepository = userRolesRepository;
    }
}

package com.aimprosoft.timetracking.service.impl;

import com.aimprosoft.timetracking.dao.UserRepository;
import com.aimprosoft.timetracking.dao.UserRoleRepository;
import com.aimprosoft.timetracking.model.CustomUserDetails;
import com.aimprosoft.timetracking.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;
    private UserRoleRepository userRolesRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username);
        if (null == user) {
            throw new UsernameNotFoundException("No user present with username: " + username);
        } else {
            List<String> userRoles = userRolesRepository.findRoleByUserName(username);
            return userDetailsConverter(user, userRoles);
        }
    }

    private CustomUserDetails userDetailsConverter(User user, List<String> userRoles) {
        CustomUserDetails userDetails = new CustomUserDetails();
        userDetails.setUserName(user.getUserName());
        userDetails.setUserRoles(userRoles);
        userDetails.setPassword(user.getPassword());
        userDetails.setLogin(user.getLogin());
        userDetails.setEmail(user.getEmail());
        userDetails.setEnabled(user.getEnabled());
        userDetails.setId(user.getId());
        userDetails.setRmLogin(user.getRmLogin());
        userDetails.setRmPassword(user.getRmPassword());

        return userDetails;
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

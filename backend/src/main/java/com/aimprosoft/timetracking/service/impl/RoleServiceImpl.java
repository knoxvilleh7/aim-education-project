package com.aimprosoft.timetracking.service.impl;

import com.aimprosoft.timetracking.dao.RoleRepository;
import com.aimprosoft.timetracking.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 02.01.18.
 */
@Service
public class RoleServiceImpl implements RoleService {

    private RoleRepository roleRepository;

    @Override
    public List<String> getRoleNamesByIds(List<Long> roleIds) {
        List<String> result = new ArrayList<>();
        for (Long roleId : roleIds) {
            result.add(roleRepository.getRoleName(roleId));
        }
        return result;
    }

    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
}

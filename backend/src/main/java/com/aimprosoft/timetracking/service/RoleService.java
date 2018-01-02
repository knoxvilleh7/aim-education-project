package com.aimprosoft.timetracking.service;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created on 02.01.18.
 */
@Service
public interface RoleService {

    List<String> getRoleNamesByIds(List<Long> roleIds);
}

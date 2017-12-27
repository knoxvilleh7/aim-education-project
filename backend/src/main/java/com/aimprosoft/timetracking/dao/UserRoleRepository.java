package com.aimprosoft.timetracking.dao;

import com.aimprosoft.timetracking.model.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole, Long> {
//todo
    @Query("select a.role from UserRole a, User b where b.userName=?1 and a.userId=b.id")
    List<String> findRoleByUserName(String username);
}
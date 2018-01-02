package com.aimprosoft.timetracking.dao;

import com.aimprosoft.timetracking.model.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole, Long> {
//todo
    @Query("select a.roleId from UserRole a where a.userId= (select u.id from User u where u.login=?1)")
    List<Long> findUserRoleByUserLogin(String login);
}
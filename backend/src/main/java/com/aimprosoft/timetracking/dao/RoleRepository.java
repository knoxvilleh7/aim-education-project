package com.aimprosoft.timetracking.dao;

import com.aimprosoft.timetracking.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("select r from Role r where r.name=?1")
    Role getRoleByName(String name);

    @Query("select r.name from Role r where r.id=?1")
    String getRoleName(Long id);
}

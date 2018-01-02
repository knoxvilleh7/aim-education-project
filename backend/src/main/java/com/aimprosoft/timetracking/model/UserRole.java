package com.aimprosoft.timetracking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "user_roles")
public class UserRole extends BaseModel {
//todo one-tp-many
    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "role_id", nullable = false)
    private Long roleId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getRole() {
        return roleId;
    }

    public void setRole(Long roleId) {
        this.roleId = roleId;
    }
}

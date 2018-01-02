package com.aimprosoft.timetracking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "users")
public class User extends BaseModel implements Serializable {

    @Column(name = "username")
    private String userName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "rm_password")
    private String rmPassword;

    @Column(name = "login", unique = true, nullable = false)
    private String login;

    @Column(name = "rm_login")
    private String rmLogin;

    @Column(name = "email")
    private String email;

    @Column(name = "enabled", nullable = false)
    private boolean enabled;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getRmPassword() {
        return rmPassword;
    }

    public void setRmPassword(String rmPassword) {
        this.rmPassword = rmPassword;
    }

    public String getRmLogin() {
        return rmLogin;
    }

    public void setRmLogin(String rmLogin) {
        this.rmLogin = rmLogin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}

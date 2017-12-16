package com.aimprosoft.timetracking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "user")
public class User implements Serializable {

    @Id
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "rm_password")
    private String rmPassword;

    @Column(name = "login", unique = true)
    private String login;

    @Column(name = "rm_login")
    private String rmLogin;

    @Column(name = "email")
    private String email;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}

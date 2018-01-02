package com.aimprosoft.timetracking.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Created on 16.12.17.
 */
@Configuration
@EnableWebSecurity
public class LoginSecurityConfig extends WebSecurityConfigurerAdapter {

    private UserDetailsService userDetailsService;

    public LoginSecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests()
//                    .antMatchers("/public/**").permitAll()
//                    .anyRequest().authenticated()
//                    .and()
//                .formLogin()
//                    .loginPage("/#/login")
//                    .permitAll()
//                    .and()
//                .httpBasic()
//                    .and()
//                .csrf().disable()
//                .logout()
//                    .logoutSuccessUrl("/")
//                    .invalidateHttpSession(true)
//                    .deleteCookies("JSESSIONID");
//
//        http
//                .authorizeRequests()
//                .antMatchers("/public/**").permitAll()
//                .antMatchers("/").permitAll()
//                .antMatchers("/api/**").authenticated()
//                .and()
//                .formLogin()
//                .loginPage("/#/login")
//                .permitAll()


        http
                .authorizeRequests()
                .antMatchers("/api/**", "/*").hasRole("USER")
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .and()
                .httpBasic()
                .and()
                .csrf().disable()
                .logout().permitAll()
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID");
    }

    @Autowired
    public PasswordEncoder passwordencoder() {
        return new BCryptPasswordEncoder();
    }
}

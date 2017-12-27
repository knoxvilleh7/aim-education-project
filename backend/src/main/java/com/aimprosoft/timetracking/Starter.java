package com.aimprosoft.timetracking;

import com.aimprosoft.timetracking.configuration.Beans;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;


/**
 * Created on 06.12.17.
 */
@SpringBootApplication
@EnableAsync
@EnableScheduling
@EnableJpaRepositories
public class Starter {

    public static void main(String[] args) {

        SpringApplication.run(new Class<?>[]{Starter.class, Beans.class}, args);
    }

}

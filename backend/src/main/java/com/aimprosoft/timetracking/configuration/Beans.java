package com.aimprosoft.timetracking.configuration;

import flexjson.JSONDeserializer;
import flexjson.JSONSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

/**
 * Created on 06.12.17.
 */
@Configuration
@ComponentScan("com.aimprosoft.timetracking")
public class Beans {

    @Bean
    public JSONSerializer jsonSerializer() {
        return new JSONSerializer().exclude("*.class");
    }

    @Bean
    @Scope("prototype")
    public <T> JSONDeserializer<T> jsonDeserializer() {
        return new JSONDeserializer<>();
    }

}

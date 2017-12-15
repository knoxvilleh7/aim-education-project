package com.aimprosoft.timetracking.model;


import java.io.Serializable;

public class TimeEntry implements Serializable {

    private Long id;
    private Double time;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getTime() {
        return time;
    }

    public void setTime(Double time) {
        this.time = time;
    }
}

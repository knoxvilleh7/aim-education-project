package com.aimprosoft.timetracking.controller;

public interface ControllerConstants {

    interface Views {

        String _Prefix = "/api";

        interface User {

            String Title = _Prefix + "/user";
            String GetAll = "/get/all";
            String Create = "/registration";
            String Delete = "/delete";
        }

    }
}

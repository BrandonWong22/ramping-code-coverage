package com.backend_team.main_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VulnerableController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/user")
    public String getUser(@RequestParam String username) {
        // Vulnerable to SQL Injection
        String sql = "SELECT * FROM users WHERE username = '" + username + "'";

        // Executing the query (this is vulnerable)
        return jdbcTemplate.queryForObject(sql, String.class);
    }
}
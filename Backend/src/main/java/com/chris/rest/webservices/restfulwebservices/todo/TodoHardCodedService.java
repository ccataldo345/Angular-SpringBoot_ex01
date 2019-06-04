package com.chris.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;


    static {
        todos.add(new Todo(++idCounter, "chris", "Learn to read", new Date(), false));
        todos.add(new Todo(++idCounter, "chris", "Learn to write", new Date(), false));
        todos.add(new Todo(++idCounter, "chris", "Learn to think", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

}

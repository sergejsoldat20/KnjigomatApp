package web.books.services;


import web.books.base.CrudService;
import web.books.models.dto.User;
import web.books.models.dto.UserResponse;

import java.util.List;

public interface UserService extends CrudService<Integer> {
    List<String> getAllUsernames();

    List<User> getAllUsers(); // all users without current
    UserResponse getCurrentUser();
    User getUserByUsername(String username);
    User getUserById(Integer id);
    String getCurrentRole();
    Boolean getEmailConfirmed(String username);
    String getEmailByUsername(String username);
    Integer getCurrentId();
    String getUsernameById(Integer id);
    List<User> getUsersWithChat();
    List<User> getAll(); // all users with current

    List<User> getAllBasicUsers();
}

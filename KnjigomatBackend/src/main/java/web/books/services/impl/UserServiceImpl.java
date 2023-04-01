package web.books.services.impl;


import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import web.books.models.dto.User;
import web.books.models.dto.UserResponse;
import web.books.models.entities.UserEntity;
import web.books.repositories.UserEntityRepository;
import web.books.security.SecurityConsts;
import web.books.services.UserService;
import web.books.base.*;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl extends CrudJpaService<UserEntity, Integer> implements UserService {

    private final UserEntityRepository repository;

    public UserServiceImpl(UserEntityRepository repository, ModelMapper modelMapper){
        super(repository, modelMapper, UserEntity.class);
        this.repository = repository;
    }

    @Override
    public List<User> getAllUsers(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return super
                .findAll(User.class)
                .stream()
                .filter(u -> !u.getUsername().equals(username))
                .filter(u -> !u.getIsDeleted())
                .collect(Collectors.toList());
    }

    @Override
    public List<User> getAll(){
        return super.findAll(User.class);
    }

    @Override
    public List<User> getAllBasicUsers() {
        return repository
                .findAll()
                .stream()
                .filter(u -> u.getRole().equals(SecurityConsts.USER))
                .map(u -> getModelMapper().map(u, User.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return super.getModelMapper().map(repository.findByUsername(username), UserResponse.class);
    }

    @Override
    public String getCurrentRole(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.findRoleByUsername(username);
    }

    @Override
    public Integer getCurrentId() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.findIdByUsername(username);
    }

    @Override
    public String getUsernameById(Integer id) {
        return repository.findUsernameById(id);
    }

    @Override
    public User getUserByEmail(String email){
        return getModelMapper().map(repository.findUserEntityByEmail(email), User.class);
    }
    @Override
    public  User getUserById(Integer id){
        return getModelMapper().map(repository.getUserEntityById(id),User.class);
    }

    @Override
    public List<User> getUsersWithChat() {
         return repository
                .findChatPartners(getCurrentId())
                .stream()
                .map(u -> getModelMapper().map(u, User.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getAllUsernames() {
        return repository.findAll().stream().map(UserEntity::getUsername).collect(Collectors.toList());
    }
}

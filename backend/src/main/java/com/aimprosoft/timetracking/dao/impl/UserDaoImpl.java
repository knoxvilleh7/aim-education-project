package com.aimprosoft.timetracking.dao.impl;

import com.aimprosoft.timetracking.dao.AbstractDaoImpl;
import com.aimprosoft.timetracking.model.User;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class UserDaoImpl extends AbstractDaoImpl {
//
//    @Override
//    public User save(Object entity) {
//        return null;
//    }
//
//    @Override
//    public User findOne(Serializable serializable) {
//        return null;
//    }
//
//    @Override
//    public boolean exists(Serializable serializable) {
//        return false;
//    }

    @Override
    public List<User> findAll() {
        CriteriaBuilder builder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<User> criteria = builder.createQuery(User.class);
        Root<User> objectRoot = criteria.from(User.class);
        criteria.select(objectRoot);
        return getEntityManager().createQuery(criteria).getResultList();
    }
//
//    @Override
//    public List<User> findAll(Sort sort) {
//        return null;
//    }
//
//    @Override
//    public Page findAll(Pageable pageable) {
//        return null;
//    }
//
//    @Override
//    public List<User> findAll(Iterable iterable) {
//        return null;
//    }
//
//    @Override
//    public long count() {
//        return 0;
//    }
//
//    @Override
//    public void delete(Serializable serializable) {
//
//    }
//
//    @Override
//    public void delete(Object entity) {
//
//    }
//
//    @Override
//    public void delete(Iterable entities) {
//
//    }
//
//    @Override
//    public void deleteAll() {
//
//    }
//
//    @Override
//    public void flush() {
//
//    }
//
//    @Override
//    public void deleteInBatch(Iterable entities) {
//
//    }
//
//    @Override
//    public void deleteAllInBatch() {
//
//    }
//
//    @Override
//    public User getOne(Serializable serializable) {
//        return null;
//    }
//
//    @Override
//    public List<User> findAll(Example example, Sort sort) {
//        return null;
//    }
//
//    @Override
//    public List<User> findAll(Example example) {
//        return null;
//    }
//
//    @Override
//    public User saveAndFlush(Object entity) {
//        return null;
//    }
//
//    @Override
//    public List<User> save(Iterable entities) {
//        return null;
//    }
//
//    @Override
//    public User findOne(Example example) {
//        return null;
//    }
//
//    @Override
//    public Page findAll(Example example, Pageable pageable) {
//        return null;
//    }
//
//    @Override
//    public long count(Example example) {
//        return 0;
//    }
//
//    @Override
//    public boolean exists(Example example) {
//        return false;
//    }
}

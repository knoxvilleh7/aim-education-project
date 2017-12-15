package com.aimprosoft.timetracking.dao;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created on 27.03.17.
 */

@Repository
public abstract class AbstractDaoImpl<T> implements Dao {

    @PersistenceContext
    private EntityManager entityManager;

    public void saveObject(T object) {
        entityManager.refresh(object);
    }

    public void deleteModel(T object) {
        entityManager.remove(object);
    }

    protected EntityManager getEntityManager() {
        return entityManager;
    }
}

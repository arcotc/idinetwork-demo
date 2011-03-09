package uk.co.idinetwork.core.repository;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;

public class PersistenceManagerFactoryManager {
    private static PersistenceManagerFactory pmfInstance = null;

    private PersistenceManagerFactoryManager() {
    	// Empty - singleton
    }

    public static PersistenceManagerFactory getInstance() {
        if (pmfInstance == null) {
        	pmfInstance = JDOHelper.getPersistenceManagerFactory("transactions-optional");
        }
        
        return pmfInstance;
    }
}
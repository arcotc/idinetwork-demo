package uk.co.idinetwork.core.repository;

import javax.jdo.PersistenceManager;

import uk.co.idinetwork.core.model.Instructor;

public class InstructorRepositoryImpl implements InstructorRepository {
	@Override
	public Instructor findInstructor(String instructorId) {
		return new Instructor("Stuart", "Lancaster", "abc1234");
	}
	
	@Override
	public Instructor saveInstructor(String forename, String surname, String adiCode) {
		Instructor instructor = new Instructor(forename, surname, adiCode);
		
		PersistenceManager pm = PersistenceManagerFactoryManager.getInstance().getPersistenceManager();
        try {
            pm.makePersistent(instructor);
        } finally {
            pm.close();
        }
		
		return instructor;
	}
}

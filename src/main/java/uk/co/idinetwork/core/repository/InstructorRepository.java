package uk.co.idinetwork.core.repository;

import uk.co.idinetwork.core.model.Instructor;

public interface InstructorRepository {
	public Instructor findInstructor(String instructorId);
	Instructor saveInstructor(String forename, String surname, String adiCode);
}

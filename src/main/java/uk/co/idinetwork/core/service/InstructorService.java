package uk.co.idinetwork.core.service;

import uk.co.idinetwork.core.model.Instructor;

public interface InstructorService {
	public Instructor findInstructor(String instructorId);
	Instructor saveInstructor(String forename, String surname, String adiCode);
}

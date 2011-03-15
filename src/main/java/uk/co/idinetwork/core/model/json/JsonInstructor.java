package uk.co.idinetwork.core.model.json;

import uk.co.idinetwork.core.model.Instructor;

public class JsonInstructor {
	private Long id;
	private String forename;
	private String surname;
	private String adiCode;

	public JsonInstructor(Instructor instructor) {
		this.id = instructor.getId();
		this.forename = instructor.getForename();
		this.surname = instructor.getSurname();
		this.adiCode = instructor.getAdiCode();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getForename() {
		return forename;
	}

	public void setForename(String forename) {
		this.forename = forename;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getAdiCode() {
		return adiCode;
	}

	public void setAdiCode(String adiCode) {
		this.adiCode = adiCode;
	}
}

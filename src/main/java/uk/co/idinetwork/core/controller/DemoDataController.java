package uk.co.idinetwork.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import uk.co.idinetwork.core.service.InstructorService;

@Controller
public class DemoDataController {
	public static final String CONTROLLER_MAPPING = "/setup-demo-data";
	
	@Autowired private InstructorService instructorService;
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.GET)
	public ModelAndView setupDemoData() {
		String forenamePrefix = "forename";
		String surnamePrefix = "surname";
		String adiCodePrefix = "adiCode";
		for (int i=1; i<5; i++) {
			instructorService.saveInstructor(forenamePrefix + i, surnamePrefix + i, adiCodePrefix + i);
		}
		
		return new ModelAndView("index");
	}
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.POST)
	public ModelAndView postNotAvailable() {
		return new ModelAndView("errors/illegal-operation");
	}
}

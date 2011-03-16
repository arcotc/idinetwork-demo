package uk.co.idinetwork.core.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FirstLevelPageController {
	public static final String CONTROLLER_MAPPING = "/{page}";
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.GET)
	public ModelAndView firstLevelPage(@PathVariable ("page") String page) {
		return new ModelAndView("firstLevelPage", "page" , page);
	}
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.POST)
	public ModelAndView postNotAvailable() {
		return new ModelAndView("errors/illegal-operation");
	}
}
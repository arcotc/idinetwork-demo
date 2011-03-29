package uk.co.idinetwork.core.controller.management;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class Management {
	private static final String CONTROLLER_MAPPING = "/management";
	private static final String VIEW = "management/menu";

	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.GET)
	public ModelAndView menu() {
		ModelAndView modelAndView = new ModelAndView(VIEW);
		
		return modelAndView;
	}
}

package uk.co.idinetwork.core.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import uk.co.idinetwork.core.model.Article;
import uk.co.idinetwork.core.service.BloggerService;

import com.google.gdata.client.GoogleService;

@Controller
public class IndexController {
	public static final String CONTROLLER_MAPPING = "/home";
	
	@Autowired private BloggerService articleService;
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.GET)
	public ModelAndView index() {
		ModelAndView modelAndView = new ModelAndView("index");
		
		GoogleService myService = new GoogleService("blogger", "continuing-to-learning");
		
		Collection<Article> userBlogs = articleService.loadUserBlogs(myService);
		modelAndView.addObject("articles", userBlogs);
		
		return modelAndView;
	}
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.POST)
	public ModelAndView postNotAvailable() {
		return new ModelAndView("errors/illegal-operation");
	}
}

package uk.co.idinetwork.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import uk.co.idinetwork.core.model.Article;
import uk.co.idinetwork.core.service.BloggerService;

import com.google.gdata.client.GoogleService;

@Controller
public class ArticlePageController {
	public static final String CONTROLLER_MAPPING = "/article/{articleKey}";
	@Autowired private BloggerService articleService;
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.GET)
	public ModelAndView firstLevelPage(@PathVariable ("articleKey") String articleKey) {
		ModelAndView modelAndView = new ModelAndView("articlePage");

		GoogleService myService = new GoogleService("blogger", "continuing-to-learning");
		Article article = articleService.loadUserBlog(myService, articleKey);
		
		modelAndView.addObject("article" , article);
		modelAndView.addObject("articles" , articleService.loadUserBlogs(myService));
		
		return modelAndView;
	}
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.POST)
	public ModelAndView postNotAvailable() {
		return new ModelAndView("errors/illegal-operation");
	}
}

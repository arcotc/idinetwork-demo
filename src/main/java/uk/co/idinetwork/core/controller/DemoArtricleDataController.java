package uk.co.idinetwork.core.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import uk.co.idinetwork.core.model.Article;
import uk.co.idinetwork.core.service.ArticleService;

@Controller
public class DemoArtricleDataController {
	public static final String CONTROLLER_MAPPING = "/setup-demo-article-data";
	
	@Autowired private ArticleService articleService;
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.GET)
	public ModelAndView setupDemoData() {
		List<Article> articles = new ArrayList<Article>();
		String pageTitlePrefix = "pageTitle";
		String titlePrefix = "title";
		String summaryPrefix = "summary";
		String copyPrefix = "copy";
		for (int i=1; i<5; i++) {
			articles.add(articleService.saveArticle(pageTitlePrefix + i, titlePrefix + i, summaryPrefix + i, copyPrefix + i));
		}
		
		return new ModelAndView("demoarticledata-setup", "articles", articles);
	}
	
	@RequestMapping(value=CONTROLLER_MAPPING, method=RequestMethod.POST)
	public ModelAndView postNotAvailable() {
		return new ModelAndView("errors/illegal-operation");
	}
}

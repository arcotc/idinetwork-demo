package uk.co.idinetwork.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import uk.co.idinetwork.core.model.Article;
import uk.co.idinetwork.core.repository.ArticleRepository;

public class ArticleServiceImpl implements ArticleService {
	@Autowired private ArticleRepository articleRepository;
	
	@Override
	public List<Article> findAllArticles() {
		return articleRepository.findAllArticles();
	}

	@Override
	public Article saveArticle(String pageTitle, String title, String summary, String copy) {
		return articleRepository.saveArticle(pageTitle, title, summary, copy);
	}
}

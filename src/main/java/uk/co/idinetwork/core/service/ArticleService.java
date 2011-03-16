package uk.co.idinetwork.core.service;

import java.util.List;

import uk.co.idinetwork.core.model.Article;

public interface ArticleService {
	public List<Article> findAllArticles();
	public Article saveArticle(String pageTitle, String title, String summary, String copy);
}

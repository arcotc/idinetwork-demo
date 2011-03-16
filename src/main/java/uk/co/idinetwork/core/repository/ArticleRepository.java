package uk.co.idinetwork.core.repository;

import java.util.List;

import uk.co.idinetwork.core.model.Article;

public interface ArticleRepository {
	public List<Article> findAllArticles();

	public Article saveArticle(String pageTitle, String title, String summary, String copy);
}

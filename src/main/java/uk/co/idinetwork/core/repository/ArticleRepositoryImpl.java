package uk.co.idinetwork.core.repository;

import java.util.List;

import uk.co.idinetwork.core.model.Article;

public class ArticleRepositoryImpl implements ArticleRepository {
	@Override
	public List<Article> findAllArticles() {
		return Article.all().fetch();
	}

	@Override
	public Article saveArticle(String pageTitle, String title, String summary, String copy) {
		Article article = new Article(pageTitle, title, summary, copy);
		
		article.insert();
		
		return article;
	}
}

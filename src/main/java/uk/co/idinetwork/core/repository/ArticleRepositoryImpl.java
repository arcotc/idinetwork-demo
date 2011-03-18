package uk.co.idinetwork.core.repository;

import java.util.Date;
import java.util.List;

import uk.co.idinetwork.core.model.Article;

public class ArticleRepositoryImpl implements ArticleRepository {
	@Override
	public List<Article> findAllArticles() {
		return Article.all().order("dateCreated").fetch();
	}

	@Override
	public Article saveArticle(String pageTitle, String title, String summary, String copy) {
		Article article = new Article(pageTitle, title, summary, copy);
		article.setDateCreated(new Date());
		
		article.insert();
		
		return article;
	}
	
	@Override
	public Article findArticleByPageTitle(String pageTitle) {
		List<Article> articles = Article.all().filter("pageTitle", pageTitle).fetch();
		
		return articles.size() > 0 ? articles.get(0) : null;
	}
}

package uk.co.idinetwork.core.model;

import java.util.Date;

import siena.Id;
import siena.Model;
import siena.Query;

public class Article extends Model {
	@Id
	private Long id;
	private String pageTitle;
	private String title;
	private String intro;
	private String copy;
	private Date dateCreated;

	public Article() {
		// Empty - default constructor
	}
	
	public Article(String pageTitle, String title, String intro, String copy) {
		this.pageTitle = pageTitle;
		this.title = title;
		this.intro = intro;
		this.copy = copy;
	}
	
	public void setLong(Long id) {
		this.id = id;
	}
	
	public Long getLong() {
		return id;
	}
	
	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}
	
	public String getPageTitle() {
		return pageTitle;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setIntro(String intro) {
		this.intro = intro;
	}
	
	public String getIntro() {
		return intro;
	}
	
	public void setCopy(String copy) {
		this.copy = copy;
	}
	
	public String getCopy() {
		return copy;
	}
	
	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}
	
	public Date getDateCreated() {
		return dateCreated;
	}
	
	@Override
	public String toString() {
		return "Article {" + id + ", " + title + "}";
	}
	
	public static Query<Article> all() {
		return all(Article.class);
	}
}

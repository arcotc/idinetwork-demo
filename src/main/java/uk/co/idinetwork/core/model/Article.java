package uk.co.idinetwork.core.model;

import java.util.Date;

import siena.Model;

public class Article extends Model implements Comparable<Article> {
	private String id;
	private String postId;
	private String key;
	private String pageTitle;
	private String title;
	private String intro;
	private String copy;
	private Date dateCreated;
	
	public Article(String pageTitle, String title, String intro, String copy) {
		setKey(pageTitle);
		this.pageTitle = pageTitle;
		this.title = title;
		this.intro = intro;
		this.copy = copy;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getId() {
		return id;
	}
	
	public void setPostId(String postId) {
		this.postId = postId;
	}

	public String getPostId() {
		return postId;
	}

	public void setKey(String key) {
		String s = key.toLowerCase().replaceAll(" ", "-");
		s = s.replaceAll("\"", "");
		s = s.replaceAll("'", "");
		s = s.replaceAll("!", "");
		s = s.replaceAll(";", "");
		s = s.replaceAll(",", "");
		s = s.replaceAll("&", "");
		
		this.key = s;
	}
	
	public String getKey() {
		return key;
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

	@Override
	public int compareTo(Article o) {
		return o.dateCreated.compareTo(getDateCreated());
	}
}

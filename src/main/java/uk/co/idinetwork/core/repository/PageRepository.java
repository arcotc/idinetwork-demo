package uk.co.idinetwork.core.repository;

import java.util.List;

import uk.co.idinetwork.core.model.Page;

public interface PageRepository {
	Page loadPage(String key);
	List<Page> loadAllPages();
	Page savePage(String title, String body);
}

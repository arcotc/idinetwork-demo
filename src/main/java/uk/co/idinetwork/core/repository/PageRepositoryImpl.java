package uk.co.idinetwork.core.repository;

import java.util.List;

import uk.co.idinetwork.core.model.Page;
import uk.co.idinetwork.core.utils.KeyUtil;

public class PageRepositoryImpl implements PageRepository {
	@Override
	public Page loadPage(String key) {
		return Page.all().filter("key", key).get();
	}

	@Override
	public List<Page> loadAllPages() {
		return Page.all().fetch();
	}

	@Override
	public Page savePage(String title, String body) {
		Page page = new Page();
		page.setKey(KeyUtil.buildKey(title));
		page.setTitle(title);
		page.setBody(body);
		
		page.insert();
		
		return page;
	}
}

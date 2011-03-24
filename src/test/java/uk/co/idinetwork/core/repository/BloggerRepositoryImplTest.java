package uk.co.idinetwork.core.repository;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

import java.io.IOException;
import java.net.URL;
import java.util.Collection;

import org.junit.Test;

import uk.co.idinetwork.core.model.Article;

import com.google.gdata.client.GoogleService;
import com.google.gdata.data.Entry;
import com.google.gdata.data.Feed;
import com.google.gdata.util.ServiceException;

public class BloggerRepositoryImplTest {
	@Test
	public void testLoadUserBloggs() throws IOException, ServiceException {
		GoogleService myService = new GoogleService("blogger", "continuing-to-learning");
		Collection<Article> actual = new BloggerRepositoryImpl().loadUserBlogs(myService);
		
		assertNotNull(actual);
	}

	@Test
	public void testGetBlogId() throws IOException, ServiceException {
		GoogleService myService = new GoogleService("blogger", "continuing-to-learning");
		try {
			// Request the feed
			final URL feedUrl = new URL("http://continuing-to-learning.blogspot.com/feeds/posts/default");
			Feed resultFeed = myService.getFeed(feedUrl, Feed.class);
	
			// Print the results
			for (int i = 0; i < resultFeed.getEntries().size(); i++) {
				Entry entry = resultFeed.getEntries().get(i);
				
				assertNotNull(entry.getId().substring(entry.getId().indexOf("blog-") + 5, entry.getId().indexOf(".post")));
			}
		}
		catch (ServiceException serviceException) {
			assertFalse(true);
		}
		catch (IOException ioException) {
			assertFalse(true);
		}
	}
}

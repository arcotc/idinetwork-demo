package uk.co.idinetwork.core.model.json;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/*
{
  version: "1.0",
  encoding: "UTF-8",
  feed: {
    xmlns: "http://www.w3.org/2005/Atom",
    xmlns$openSearch: "http://a9.com/-/spec/opensearchrss/1.0/",
    xmlns$georss: "http://www.georss.org/georss",
    xmlns$thr: "http://purl.org/syndication/thread/1.0",
    id: {
      $t: "tag:blogger.com,1999:blog-7745840761108268253"
    },
    updated: {
      $t: "2011-03-19T01:19:59.273-07:00"
    },
    title: {
      type: "text",
      $t: "Continuing to Learn"
    },
    subtitle: {
      type: "html",
      $t: ""
    },
    link: {
      0: {
        rel: "http://schemas.google.com/g/2005#feed",
        type: "application/atom+xml",
        href: "http://continuing-to-learning.blogspot.com/feeds/posts/default"
      },
      1: {
        rel: "self",
        type: "application/atom+xml",
        href: "http://www.blogger.com/feeds/7745840761108268253/posts/default?alt=json"
      },
      2: {
        rel: "alternate",
        type: "text/html",
        href: "http://continuing-to-learning.blogspot.com/"
      },
      3: {
        rel: "hub",
        href: "http://pubsubhubbub.appspot.com/"
      }
    },
    author: {
      0: {
        name: {
          $t: "Mark"
        },
        uri: {
          $t: "http://www.blogger.com/profile/03847911043928423691"
        },
        email: {
          $t: "noreply@blogger.com"
        }
      }
    },
    generator: {
      version: "7.00",
      uri: "http://www.blogger.com",
      $t: "Blogger"
    },
    openSearch$totalResults: {
      $t: "1"
    },
    openSearch$startIndex: {
      $t: "1"
    },
    openSearch$itemsPerPage: {
      $t: "25"
    },
    entry: {
      0: {
        id: {
          $t: "tag:blogger.com,1999:blog-7745840761108268253.post-2525821190563293294"
        },
        published: {
          $t: "2011-03-04T04:14:00.000-08:00"
        },
        updated: {
          $t: "2011-03-04T04:14:40.681-08:00"
        },
        title: {
          type: "text",
          $t: "Getting started"
        },
        content: {
          type: "html",
          $t: "Hi, my name is Mark and even though I've been working in the IT Industry as a developer since 1993 I'm continuing to learn all the time. With that in mind, and because I'm investigating some new areas within programming, I thought what I find out may help you up the learning at some point.<br /><br />There may be better ways to do some of the things I'll post, and maybe I'll revisit some postings more than once. If nothing else it will show you that you are no alone when it comes to learning new things.<div class="blogger-post-footer"><img width='1' height='1' src='https://blogger.googleusercontent.com/tracker/7745840761108268253-2525821190563293294?l=continuing-to-learning.blogspot.com' alt='' /></div>"
        },
        link: {
          0: {
            rel: "replies",
            type: "application/atom+xml",
            href: "http://continuing-to-learning.blogspot.com/feeds/2525821190563293294/comments/default",
            title: "Post Comments"
          },
          1: {
            rel: "replies",
            type: "text/html",
            href: "http://continuing-to-learning.blogspot.com/2011/03/getting-started.html#comment-form",
            title: "0 Comments"
          },
          2: {
            rel: "edit",
            type: "application/atom+xml",
            href: "http://www.blogger.com/feeds/7745840761108268253/posts/default/2525821190563293294"
          },
          3: {
            rel: "self",
            type: "application/atom+xml",
            href: "http://www.blogger.com/feeds/7745840761108268253/posts/default/2525821190563293294"
          },
          4: {
            rel: "alternate",
            type: "text/html",
            href: "http://continuing-to-learning.blogspot.com/2011/03/getting-started.html",
            title: "Getting started"
          }
        },
        author: {
          0: {
            name: {
              $t: "Mark"
            },
            uri: {
              $t: "http://www.blogger.com/profile/03847911043928423691"
            },
            email: {
              $t: "noreply@blogger.com"
            },
            gd$extendedProperty: {
              xmlns$gd: "http://schemas.google.com/g/2005",
              name: "OpenSocialUserId",
              value: "00066227927126671253"
            }
          }
        },
        thr$total: {
          $t: "0"
        }
      }
    }
  }
}
 */

@JsonIgnoreProperties(ignoreUnknown=true)
public class Atom {
	private String version;
	private String encoding;
	private AtomEntry entry;

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getEncoding() {
		return encoding;
	}

	public void setEncoding(String encoding) {
		this.encoding = encoding;
	}

	public AtomEntry getEntry() {
		return entry;
	}

	public void setEntry(AtomEntry entry) {
		this.entry = entry;
	}
}

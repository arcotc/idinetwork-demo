<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Blogger Feed</title>
	</head>
	<body>
		<h1>Blogger Feed</h1>
		<table>
			<tr>
				<td width="50%">
					<c:choose>
						<c:when test="${empty bloggerFeeds}">
							No blogger feeds have been defined.
						</c:when>
						<c:otherwise>
							<b>Existing Blogger Feeds:</b></br>
							<table>
								<tr>
									<td><b>Name</b></td>
									<td><b>Feed URL</b></td>
									<td>&nbsp;</td>
								</tr>
								<c:forEach items="${bloggerFeeds}" var="bloggerFeed">
									<tr>
										<td>${bloggerFeed.name}</td>
										<td>${bloggerFeed.feedUrl}</td>
										<td>
											<form action="/site/management/blogger-feed/delete/${bloggerFeed.id}" method="POST">
												<input type="submit" value="delete"/>
											</form>
										</td>
									</tr>
								</c:forEach>
							</table>
						</c:otherwise>
					</c:choose>
					<br/>
					<form method="post" action="/site/management/blogger-feed/add">
						Name: <input type="text" name="name"/><br/>
						Feed URL: <input type="text" name="feedUrl"/></br>
						<input type="submit" value="Add"/>
					</form>
				</td>
			</tr>
		</table>
		<br/>
		Return to <a href="/site/management">management menu</a>.
		<br/>
		<br/>
		To help with the performance of the web site the articles list retrieved from the blogger feed are cached (remembered)
		for 15 minutes before they are reloaded.  You can force the cache to be flushed now.
		<form action="/site/management/blogger/flush-cache" method="POST">
			<input type="submit" value="flush cache"/>
		</form>
	</body>
</html>
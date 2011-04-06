<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Blogger Feed | Confirmation</title>
	</head>
	<body>
		<h1>Blogger Feed</h1>
		<c:choose>
			<c:when test="${bloggerFeedConfirmation == 'true'}">
				Your change has been applied.
			</c:when>
			<c:otherwise>
				An error occurred, please retry the operation or get in touch with customer support.
			</c:otherwise>
		</c:choose>
		<br/>
		Return to <a href="/site/management/blogger-feed">blogger feed management</a> | <a href="/site/management">management</a>.
		<br/>
		<br/>
		To help with the performance of the web site the articles list retrieved from the blogger feed are cached (remembered)
		for 15 minutes before they are reloaded.  As you have just made a change to the blogger feeds to force your changes
		to take effect you may wish to force the cache to be flushed now.
		<form action="/site/management/blogger/flush-cache" method="POST">
			<input type="submit" value="flush cache"/>
		</form>
	</body>
</html>
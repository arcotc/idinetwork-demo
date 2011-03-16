<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Demo Data Setup</title>
	</head>
	<body>
		<c:forEach items="${articles}" var="article">
			${article.pageTitle} ${article.title} (${article.intro}, ${article.copy})<br/>
		</c:forEach>
	</body>
</html>
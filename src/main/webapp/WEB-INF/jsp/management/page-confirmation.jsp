<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Page | Confirmation</title>
	</head>
	<body>
		<h1>Page</h1>
		<c:choose>
			<c:when test="${pageConfirmation == 'true'}">
				Your change has been applied.
			</c:when>
			<c:otherwise>
				An error occurred, please retry the operation or get in touch with customer support.
			</c:otherwise>
		</c:choose>
		<br/>
		Return to <a href="/site/management/page">page management</a>.
	</body>
</html>
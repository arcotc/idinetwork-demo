<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Page</title>
	</head>
	<body>
		<h1>Page</h1>
		<table>
			<tr>
				<td width="50%">
					<c:choose>
						<c:when test="${empty pages}">
							No pages have been defined.
						</c:when>
						<c:otherwise>
							<c:forEach items="${pages}" var="page">
								<table>
									<tr>
										<td>${page.title}</td>
									</tr>
								</table>
							</c:forEach>
						</c:otherwise>
					</c:choose>
					<br/>
					<form method="post" action="/site/management/page/add">
						Title: <input type="text" name="title"/><br/>
						<textarea rows="10" cols="40" name="body"></textarea>
						<input type="submit" value="Add"/>
					</form>
				</td>
			</tr>
		</table>
		<br/>
		Return to <a href="/site/management">management menu</a>.
	</body>
</html>
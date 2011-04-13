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
							<table>
								<tr>
									<td><b>Title</b></td>
									<td><b>Link Title</b></td>
									<td></td>
								</tr>
								<c:forEach items="${pages}" var="page">
									<tr>
										<td>${page.title}</td>
										<td>${page.key}</td>
										<td>
											<form action="/site/management/page/edit/${page.id}" method="GET">
												<input type="submit" value="edit"/>
											</form>
											<form action="/site/management/page/delete/${page.id}" method="POST">
												<input type="submit" value="delete"/>
											</form>
										</td>
									</tr>
								</c:forEach>
							</table>
						</c:otherwise>
					</c:choose>
					<br/>
					<form method="post" action="/site/management/page/add">
						Title: <input type="text" name="title"/><br/>
						Link: <input type="text" name="linkTitle"/></br>
						Body:<br/>
						<textarea rows="10" cols="40" name="body"></textarea><br/>
						Meta Description:<br/>
						<textarea rows="3" cols="40" name="metaDescription"></textarea><br/>
						Meta Keywords: <input type="text" name="metaKeywords"/><br/>
						<input type="submit" value="Add"/>
					</form>
				</td>
			</tr>
		</table>
		<br/>
		Return to <a href="/site/management">management menu</a>.
	</body>
</html>
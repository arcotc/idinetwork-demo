<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Site Navigation</title>
	</head>
	<body>
		<h1>Site Navigation</h1>
		<table>
			<tr>
				<td width="50%">
					<h2>Top Navigation</h2>
					<c:choose>
						<c:when test="${empty topSiteNavigation}">
							Top navigation has not been defined.
						</c:when>
						<c:otherwise>
							<table>
								<tr>
									<td><b>Title</b></td>
									<td></td>
								</tr>
								<c:forEach items="${topSiteNavigation}" var="navigation">
									<tr>
										<td>${navigation.title}</td>
										<td>
											<form action="/site/management/site-navigation/delete/top/${topSiteNavigation.id}" method="POST">
												<input type="submit" value="delete"/>
											</form>
										</td>
									</tr>
								</c:forEach>
							</table>
						</c:otherwise>
					</c:choose>
					<br/>
					<form method="post" action="/site/management/site-navigation/add/top">
						Title: <input type="text" name="title"/>
						<input type="submit" value="Add"/>
					</form>
				</td>
				<td width="50%">
					<h2>Side Navigation</h2>
					<c:choose>
						<c:when test="${empty sideSiteNavigation}">
							Side navigation has not been defined.
						</c:when>
						<c:otherwise>
							<table>
								<tr>
									<td><b>Title</b></td>
									<td></td>
								</tr>
								<c:forEach items="${sideSiteNavigation}" var="navigation">
									<tr>
										<td>${navigation.title}</td>
										<td>
											<form action="/site/management/site-navigation/delete/side/${topSiteNavigation.id}" method="POST">
												<input type="submit" value="delete"/>
											</form>
										</td>
									</tr>
								</c:forEach>
							</table>
						</c:otherwise>
					</c:choose>
					<br/>
					<form method="post" action="/site/management/site-navigation/add/side">
						Title: <input type="text" name="title"/>
						<input type="submit" value="Add"/>
					</form>
				</td>
			</tr>
		</table>
		<br/>
		Return to <a href="/site/management">management menu</a>.
	</body>
</html>
<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Images</title>
	</head>
	<body>
		<h1>Images</h1>
		<table>
			<tr>
				<td width="100%">
					<c:choose>
						<c:when test="${empty images}">
							No images have been defined.
						</c:when>
						<c:otherwise>
							<table width="100%">
								<tr>
									<td width="25%"><b>Title</b></td>
									<td width="25%"><b>Link Title</b></td>
								</tr>
								<c:forEach items="${images}" var="image">
									TODO
								</c:forEach>
							</table>
						</c:otherwise>
					</c:choose>
					<br/>
					<form id="file-upload" action="/site/management/image/upload" enctype="multipart/form-data" method="post">
					    <label for="file">Picture:</label>
					    <input name="file" type="file" />
					    <input type="submit" value="Save" />
					</form>
				</td>
			</tr>
		</table>
		<br/>
		Return to <a href="/site/management">management menu</a>.
	</body>
</html>
<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
  <jsp:include page="includes/meta-tags.jsp"/>
  <title>
	<c:choose>
		<c:when test="${not empty page}">${page.title} | </c:when>
		<c:when test="${not empty article}">${article.title} | </c:when>
	</c:choose>
 	IDINetwork Demonstration
  </title>
<link rel="stylesheet" type="text/css" href="/static/styles/default.css" />
</head>
<body>

<div id="outer">

	<div id="upbg"></div>

	<div id="inner">

		<jsp:include page="includes/header.jsp"/>
	
		<jsp:include page="includes/topnavbar.jsp"/>

		<div id="primarycontent">
			<jsp:include page="includes/mainbody2.jsp"/>
		</div>
		
		<div id="secondarycontent">
			<jsp:include page="includes/sidebar2.jsp"/>
		</div>
	
		<div id="footer">
			<jsp:include page="includes/footer.jsp"/>
		</div>

	</div>

</div>

</body>
</html>
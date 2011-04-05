<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>${page.title} | johnscottorn.co.uk</title>
		<link rel="stylesheet" href="/static/styles/johnscottern.css" type="text/css">
	</head>
	<body>
		<table width="765" border="0" align="center" cellpadding="0" cellspacing="0">
		  <tr>
		    <td><table width="765" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">
		      <tr>
		        <td valign="top"><table width="269" border="0" cellspacing="0" cellpadding="0">
		          <tr>
		          	<jsp:include page="includes/logo.jsp"/>
		          </tr>
		          <tr>
		            <td><img src="/static/images/spacer.gif" width="1" height="27"></td>
		          </tr>
		          <tr>
		            <td>
		            	<jsp:include page="includes/side-navigation.jsp"/>
		            </td>
		          </tr>
		          <jsp:include page="includes/articles-side-panel.jsp"/>
		        </table></td>
		        <td valign="top"><table width="496" border="0" cellspacing="0" cellpadding="0">
		          <tr>
		            <td>
		            	<jsp:include page="includes/top-navigation.jsp"/>
		            </td>
		          </tr>
		          <tr>
		            <td><a href="/"><img src="/static/images/header.jpg" width="496" height="175" border="0"></a></td>
		          </tr>
		          <tr>
		            <td>
		            	<jsp:include page="includes/main-body.jsp"/>
		            </td>
		          </tr>
				  </table></td>
		      </tr>
		    </table></td>
		  </tr>
		  <tr>
		    <td><a href="/"><img src="/static/images/footer.gif" width="765" height="22" border="0"></a></td>
		  </tr>
		  <tr>
		    <td>
		    	<jsp:include page="includes/footer.jsp"/>
			</td>
		  </tr>
		</table>
		<a href="/"><img src="/static/images/spacer.gif" width="1" height="1" border="0"></a>
	</body>
</html>
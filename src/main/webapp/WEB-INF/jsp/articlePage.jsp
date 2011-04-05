<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>${article.title} | johnscottorn.co.uk</title>
		<link rel="stylesheet" href="/static/styles/johnscottern.css" type="text/css">
	</head>
	<body>
		<table width="765" border="0" align="center" cellpadding="0" cellspacing="0">
		  <tr>
		    <td><table width="765" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">
		      <tr>
		        <td valign="top"><table width="269" border="0" cellspacing="0" cellpadding="0">
		          <tr>
		            <td><a href="/"><img src="/static/images/title.gif" width="269" height="119" border="0"></a></td>
		          </tr>
		          <tr>
		            <td><img src="/static/images/spacer.gif" width="1" height="27"></td>
		          </tr>
		          <tr>
		            <td>
		            	<jsp:include page="includes/side-navigation.jsp"/>
					</td>
		          </tr>
		          <c:if test="${not empty articles}">
			          <tr>
			            <td><table width="204" border="0" align="center" cellpadding="0" cellspacing="0">
			              <tr>
			                <td background="/static/images/partner_t.gif" height="34"><img src="/static/images/spacer.gif" width="27" height="8"><strong>Articles</strong></td>
			              </tr>
			              <tr>
			                <td background="/static/images/gr1.gif"><table width="204" border="0" cellspacing="0" cellpadding="0">
			                  <tr>
			                    <td width="25"><img src="/static/images/spacer.gif" width="20" height="8"></td>
			                    <td width="175"><table width="175" border="0" cellspacing="5" cellpadding="0">
			                    	<c:forEach items="${articles}" var="article">
				                      <tr>
				                        <td class="style2"><a href="/site/article/${article.key}" class="style2">${article.title}</a></td>
				                      </tr>
				                      <tr>
				                      	<td class="style4">
				                      		${article.intro} 
				                      		<a href="/site/article/${article.key}" class="style5">read more ...</a>
				                      	</td>
				                      </tr>
			                    	</c:forEach>
			                    </table></td>
			                  </tr>
			                </table></td>
			              </tr>
			              <tr>
			                <td><img src="/static/images/part_bottom.gif" width="204" height="7"></td>
			              </tr>
			            </table></td>
			          </tr>
			      </c:if>
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
		            <td><table width="445" border="0" align="left" cellpadding="0" cellspacing="0">
					  <tr>
		                <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
		              </tr>
		              <tr>
		                <td><span class="pageTitle">${article.title}</span></td>
		              </tr>
		              <tr>
		                <td><span class="style4">Created on <fmt:formatDate value="${article.dateCreated}" pattern="d MMMMMMMMM yyyy"/></span></td>
		              </tr>
					  <tr>
		                <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
		              </tr>
		              <tr>
		                <td>
		                  <p>${article.copy}</p>
		                </td>
		              </tr>
		              <tr>
		                <td background="/static/images/gr2.gif" height="52"><img src="/static/images/spacer.gif" width="1" height="52"></td>
		              </tr>
		            </table></td>
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
		      <table width="766" border="0" cellspacing="0" cellpadding="0">
		        <tr>
		          <td width="421" align="left" class="style1"><a href="/site//" style="cursor:default ">&copy; copyright 2006</a></td>
				  <td width="10"><img src="/static/images/spacer.gif" width="1" height="20"><a href="/"><img src="/static/images/spacer.gif" width="1" height="1" border="0"></a></td>
		          <td width="335" align="right" class="style1"> <a href="/site//">Web Design  by TemplatesFreeLance.Com</a></td>
		        </tr>
		      </table><a href="/"><img src="/static/images/spacer.gif" width="1" height="1" border="0"></a></td>
		  </tr>
		</table>
		<a href="/"><img src="/static/images/spacer.gif" width="1" height="1" border="0"></a>
	</body>
</html>
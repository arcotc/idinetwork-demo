<!-- Start of main-body -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<table width="445" border="0" align="left" cellpadding="0" cellspacing="0">
<c:if test="${not empty page}">
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
  </tr>
  <tr>
    <td><span class="pageTitle">${page.title}</span></td>
  </tr>
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
  </tr>
  <tr>
    <td class="bodyText">
    	${page.body}
    </td>
  </tr>
</c:if>
<c:if test="${not empty article}">
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
    <td class="bodyText">
      <p>${article.copy}</p>
    </td>
  </tr>
</c:if>
  <tr>
    <td background="/static/images/gr2.gif" height="52"><img src="/static/images/spacer.gif" width="1" height="52"></td>
  </tr>
</table>
<!-- End of main-body -->

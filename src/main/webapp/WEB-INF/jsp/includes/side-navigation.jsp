<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<table width="204" border="0" align="center" cellpadding="0" cellspacing="0">
   <c:forEach items="${sideNavigation}" var="navigation">
     <tr>
       <td height="28" background="/static/images/button.gif" class="style1"><img src="/static/images/spacer.gif" width="27" height="1"><strong><a href="/site/${navigation.key}">${navigation.title}</a></strong></td>
     </tr>
   </c:forEach>
   <tr>
     <td><img src="/static/images/spacer.gif" width="1" height="27"></td>
   </tr>
</table>
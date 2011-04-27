<!-- Start of top-navigation -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<table width="496" border="0" cellspacing="0" cellpadding="0" bgcolor="#414141">
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="45"></td>
   <c:forEach items="${topNavigation}" var="navigation">
     <td width="75"><a href="/site/${navigation.key}"><span class="style3"><u>${navigation.title}</u></span></a></td>
   </c:forEach>
  </tr>
</table>
<!-- End of top-navigation -->

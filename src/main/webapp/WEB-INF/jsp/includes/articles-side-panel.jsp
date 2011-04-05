<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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

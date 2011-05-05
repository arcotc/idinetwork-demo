<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>
<idi:articlesTag tags="news"/>
<c:if test="${not empty articles}">
    <!-- SIDEBAR -->		
	  <div class="sidebar">

		<!-- Main Title -->
        <p class="sidebar-maintitle">Latest News</p>
        
   	  <c:forEach items="${articles}" var="article" varStatus="loopStatus">
		<!-- Text box -->
        <p class="sidebar-title-noshade">${article.title}</p>
		<div class="sidebar-txtbox-noshade">
	  		${article.intro}<br/>
	        &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more ...</a>
        </div>
      </c:forEach>
      </div>        																						
</c:if>
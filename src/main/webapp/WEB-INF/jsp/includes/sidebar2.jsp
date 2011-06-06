<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>
<idi:articlesTag tags="${article.tags}" maxItems="4"/>
<c:if test="${not empty articles}">

		<h3>Related</h3>
		<c:set var="topItems" value="2"/>
	 	<c:forEach items="${articles}" var="article" varStatus="loopStatus">
	 	    <c:if test="${loopStatus.count <= topItems}">
				<div class="content">
					<p>
						<strong>${article.title}</strong>
						${article.intro}<br/>
						<a href="/site/article/${article.key}">More ...</a>
					</p>
				</div>
		    </c:if>
		</c:forEach>
				
				<!--h3>Other News</h3-->
				<div class="content">
					<ul class="linklist">
	 	<c:forEach items="${articles}" var="article" varStatus="loopStatus">
	 	    <c:if test="${loopStatus.count > topItems}">
						<li>&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">${article.title}</a></li>
			</c:if>
        </c:forEach>
					</ul>
				</div>
</c:if>
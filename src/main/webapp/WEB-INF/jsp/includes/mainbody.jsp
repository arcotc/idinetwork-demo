<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>
<c:if test="${not empty page}">
			<div class="post">
				<div class="header">
					<h3>${page.title}</h3>
					<div class="date"></div>
				</div>
				<div class="content">
					${page.body}
				</div>			
				<div class="footer">
					<!--ul>
						<li class="printerfriendly"><a href="#">Printer Friendly</a></li>
						<li class="comments"><a href="#">Comments (18)</a></li>
						<li class="readmore"><a href="#">Read more</a></li>
					</ul-->
				</div>
			</div>
</c:if>
<c:if test="${not empty article}">
			<div class="post">
				<div class="header">
					<h3>${article.title}</h3>
					<div class="date"></div>
				</div>
				<div class="content">
					<p>${article.copy}</p>
				</div>			
				<div class="footer">
					<!--ul>
						<li class="printerfriendly"><a href="#">Printer Friendly</a></li>
						<li class="comments"><a href="#">Comments (18)</a></li>
						<li class="readmore"><a href="#">Read more</a></li>
					</ul-->
				</div>
			</div>
</c:if>
<c:if test="${not empty page.tags}">
    <idi:articlesTag tags="${page.tags}" name="pageArticles" maxItems="2"/>
	<!-- Text container -->
	<div class="content3-container line-box">
        <c:forEach items="${pageArticles}" var="article" varStatus="loopStatus">
          <c:if test="${loopStatus.count == 1}">
			<div class="content3-container-2col-left">
			  <p class="content-title-noshade-size3">${article.title}</p>
			  <!--p class="content-subtitle-noshade-size1">${article.intro}</p-->
			  <div class="content-txtbox-noshade">
				<p><c:out value="${fn:substring(article.copy,0,300)}"/>...</p>
                &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more ...</a>
              </div>
			</div>
		  </c:if>

          <c:if test="${loopStatus.count == 2}">
			<div class="content3-container-2col-right">
			  <p class="content-title-noshade-size3">${article.title}</p>
			  <!--p class="content-subtitle-noshade-size1">${article.intro}</p-->
        	  <div class="content-txtbox-noshade">
				<p><c:out value="${fn:substring(article.copy,0,300)}"/>...</p>
                &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more ...</a>
			  </div>
			</div>
		  </c:if>
		</c:forEach>		
	</div>

		<div class="content3-container">
          <c:forEach items="${pageArticles}" var="article" varStatus="loopStatus">
            <c:if test="${loopStatus.count == 3}">
              <div class="content3-container-3col-left">
			    <p class="content-title-noshade-size3">${article.title}</p>
				<!--p class="content-subtitle-noshade-size1">${article.intro}</p-->
				<div class="content-txtbox-noshade">
				<p><c:out value="${fn:substring(article.copy,0,200)}"/>...</p>
                &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more ...</a>
				</div>
			  </div>
		    </c:if>

            <c:if test="${loopStatus.count == 4}">
              <div class="content3-container-3col-middle">
			    <p class="content-title-noshade-size3">${article.title}</p>
				<!--p class="content-subtitle-noshade-size1">${article.intro}</p-->
				<div class="content-txtbox-noshade">
				<p><c:out value="${fn:substring(article.copy,0,200)}"/>...</p>
                &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more ...</a>
				</div>
			  </div>
		    </c:if>

            <c:if test="${loopStatus.count == 5}">
              <div class="content3-container-3col-right">
			    <p class="content-title-noshade-size3">${article.title}</p>
				<!--p class="content-subtitle-noshade-size1">${article.intro}</p-->
				<div class="content-txtbox-noshade">
				<p><c:out value="${fn:substring(article.copy,0,200)}"/>...</p>
                &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more ...</a>
				</div>
			  </div>
		    </c:if>
		  </c:forEach>		
	    </div>
</c:if>
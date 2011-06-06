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

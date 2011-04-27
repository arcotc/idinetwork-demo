<!-- Start of meta-tags -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:choose>
	<c:when test="${not empty page}">
		<c:if test="${not empty page.metaDescription}"><meta NAME="description" content="${page.metaDescription}"></c:if>
		<c:if test="${not empty page.metaKeywords}"><meta NAME="keywords" content="${page.metaKeywords}"></c:if>
	</c:when>
	<c:when test="${not empty articles}">
		<c:if test="${not empty article.title}">
			<meta NAME="description" content="${article.title}">
			<meta NAME="keywords" content="${article.title}">
		</c:if>
	</c:when>
</c:choose>
<!-- End of meta-tags -->

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:choose>
	<c:when test="${not empty page}">
		<meta NAME="description" content="${page.metaDescription}">
		<meta NAME="keywords" content="${page.metaKeywords}">
	</c:when>
	<c:when test="${not empty articles}">
		<meta NAME="description" content="${article.title}">
		<meta NAME="keywords" content="${article.intro}">
	</c:when>
</c:choose>
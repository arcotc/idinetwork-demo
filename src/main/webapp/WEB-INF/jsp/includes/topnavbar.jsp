<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
		<div id="menu">
			<ul>
				<c:forEach items="${topNavigation}" var="navigation" varStatus="loopStatus">
					<li <c:if test="${loopStatus.first}">class="first"</c:if>><a href="/site/${navigation.key}">${navigation.title}</a></li>
				</c:forEach>
			</ul>

		<div id="date">Putting you in control</div>
		</div>

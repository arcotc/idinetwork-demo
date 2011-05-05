<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
    <!-- Navigation Level 2 -->												
    <div class="nav2">			
			<ul>
				<c:forEach items="${sideNavigation}" var="navigation">
        			<li><a href="/site/${navigation.key}">${navigation.title}</a></li>
   				</c:forEach>
		  </ul>
		</div>

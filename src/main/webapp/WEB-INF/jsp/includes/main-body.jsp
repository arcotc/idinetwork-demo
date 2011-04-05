<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<table width="445" border="0" align="left" cellpadding="0" cellspacing="0">
<c:if test="${not empty page}">
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
  </tr>
  <tr>
    <td><span class="pageTitle">${page.title}</span></td>
  </tr>
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
  </tr>
  <tr>
    <td><a href="/"><img src="/static/images/img.jpg" width="179" height="120" border="0" align="left"></a>Hendrerit, eum nostrud, quis eu enim nonummy ea capto natu feugiat sino, magna. Mara wisi zelus caecus, nunc tristique. Iaceo persto foras iriure valetudoto indoles exerci. Ut, letalis iriure importunus.
      <p>Feugiat tum, neque quis scisco. Humo, iustum, damnum nibh aliquip ut. Eum ad cogo acsi vel vel esse conventio volutpat duis bene immitto iustum. Ulciscor adsum pertineo facilisis qui acsi vindico sed facilisi.</p></td>
  </tr>
</c:if>
<c:if test="${not empty article}">
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
  </tr>
  <tr>
    <td><span class="pageTitle">${article.title}</span></td>
  </tr>
  <tr>
    <td><span class="style4">Created on <fmt:formatDate value="${article.dateCreated}" pattern="d MMMMMMMMM yyyy"/></span></td>
  </tr>
  <tr>
    <td><img src="/static/images/spacer.gif" width="1" height="20"></td>
  </tr>
  <tr>
    <td>
      <p>${article.copy}</p>
    </td>
  </tr>
</c:if>
  <tr>
    <td background="/static/images/gr2.gif" height="52"><img src="/static/images/spacer.gif" width="1" height="52"></td>
  </tr>
</table>
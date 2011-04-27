<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%
	response.sendRedirect((String)request.getAttribute("redirectUrl"));
%>
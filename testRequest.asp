<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>WDD : A-02</title>
    <style type="text/css">
        .style1 { text-align: center; font-family: Calibri, Arial, sans-serif; }
        .style2 { font-family: Calibri, Arial, sans-serif; }
        td { font-family: Consolas, sans-serif; }
    </style>
</head>
<body>
    <h1 class="style1"> WDD (PROG2001) : A-02 : The <i>Form Listener</i></h1>
    <br />
    <h3 class="style2"> Response page for either a GET or POST method.</h3>
<br />
<%
dim i

i=1
if request.querystring<>"" then
    response.write "<p class='style2'>You sent data to <i>testRequest.asp</i> using the <b>GET</b> action ... Here is what you sent:<br/><br/></p><div align='center'><table border='0'>"
    for each str in request.querystring
        response.write "<tr><td width='120' align='right'>Parameter "&CStr(i)&":</td><td width='150' align='right'>"& str & "</td><td width='40' align='center'>=</td><td width='250' align='left'>" & request.querystring(str).Item & "</td></tr>"
	   i=i+1
    next
    response.write "</table></div>"
else
    if request.form <>"" then
        response.write "<p class='style2'>You sent data to <i>testRequest.asp</i> using the <b>POST</b> action ... Here is what you sent:<br/><br/></p><div align='center'><table border='0'>"
        for each str in request.form
            response.write "<tr><td width='120' align='right'>Parameter "&CStr(i)&":</td><td width='150' align='right'>"& str & "</td><td width='40' align='center'>=</td><td width='250' align='left'>" & request.form(str).Item & "</td></tr>"
		 i=i+1
        next
        response.write "</table></div>"
    else
        response.write "<p class='style2'>Hey ... There is no GET or POST method in use!</p>"
    end if
end if
%>
</body>
</html>

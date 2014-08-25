<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Java EE 7: WebSockets</title>
    <link rel="stylesheet" href="style.css"/>
    <script src="script.js"></script>
</head>
<body>
<div style="text-align: center">
    <input id="connect" class="button green" value="Connect" type="button" onclick="connect()"/>
    <input id="disconnect" class="button rosy" value="Disconnect" type="button" onclick="disconnect()" disabled="true"/>
    <br/><br/>

    <label id="tip" style="visibility: hidden; color: #b73948; font-size: large">Tip: press "Connect" first</label>
    <br/><br/>

    <input id="input" type="text" size="48" placeholder="Write smth..."/>
    <input id="sendMsg" class="button blue" value="Send Message" type="button" onclick="sendMsg()"/><br/>
    <textarea readonly class="textAreaBack" id="output" rows="20" cols="55"></textarea><br/>
    <input id="clear" class="button white" type="button" onclick="erase()" value="Clear"/>
</div>
</body>
</html>

var webSocket;

function onMessage(message) {
    document.getElementById("output").value += message.data + "\n";
    document.getElementById("output").value += "---------------------------------------------\n\n";
}

function sendMsg() {
    var text = document.getElementById("input").value;
    if (webSocket == null) {
        document.getElementById("tip").style.visibility = "visible";
        return;
    }
    if (text != "") {
        webSocket.send(text);
    }
    document.getElementById("input").value = "";
}

function connect() {
    document.getElementById("tip").style.visibility = "hidden";
    webSocket = new WebSocket("ws://" + window.location.host + "/ChatApp/chatMe");
    webSocket.onmessage = function (message) {
        onMessage(message);
    };
    if (webSocket != null) {
        document.getElementById("connect").disabled = true;
        document.getElementById("disconnect").disabled = false;
    }
    console.log("Connection");
}

function disconnect() {
    if (webSocket != null) {
        document.getElementById("output").value = "";
        webSocket.close();
        webSocket = null;
        document.getElementById("disconnect").disabled = true;
        document.getElementById("connect").disabled = false;
    }
    console.log("Disconnection");
}

function erase() {
    document.getElementById("output").value = "";
}
$(document).ready(function () {
    var ws = new WebSocket('wss://' + location.host);
    ws.onopen = function () {}
    ws.onmessage = function (message) {
        try{
            var obj = JSON.parse(message.data);
            document.getElementById("txtout").value = obj;
        }
        catch (err)
        {
            console.log(err);
        }
    }
});
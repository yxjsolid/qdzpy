(function() {
    var $msg = $('#msg');
    var $text = $('#text');

    var WebSocket = window.WebSocket || window.MozWebSocket;
    if (WebSocket) {
        try {
            var socket = new WebSocket('ws:'+location.host+'/new-msg/socket');
        } catch (e) {}
    }

    if (socket) {
        socket.onmessage = function(event) {
            $msg.append('<p>' + event.data + '</p>');
        }

        $('form').submit(function() {
            socket.send($text.val());
            $text.val('').select();
            return false;
        });
    }
})();
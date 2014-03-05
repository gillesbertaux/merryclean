var statusTracker;
var percentage = 0;

function checkStatus() {
    percentage = percentage + 100;
    $('#progressbar').animate({
        width : percentage + '%'
    });
    if (percentage == 100) stop();
}
function startProgress(){
    statusTracker = setInterval(checkStatus, 400);
}

function stop() {
    clearInterval(statusTracker);
}
$(document).ready(startProgress);
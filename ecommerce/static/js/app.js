



var message_timeout = document.getElementById("message-timer");

if (message_timeout !== null) {
    setTimeout(function() {
        message_timeout.style.display = "none";
    }, 2500);
} else {
    console.error("Element with ID 'message-timer' not found.");
}


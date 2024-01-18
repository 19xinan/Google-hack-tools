function copyToClipboard(text, notificationId) {
    navigator.clipboard.writeText(text).then(function() {
        document.getElementById(notificationId).style.display = 'inline-block';
        setTimeout(function() {
            document.getElementById(notificationId).style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Unable to copy to clipboard', err);
    });
}

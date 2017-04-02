$(document).ready(function() {
    $("body").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta);
        event.preventDefault();
    });
});
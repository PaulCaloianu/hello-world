(function (global, doc) {
    global.setTimeout(function () {
        doc.body.innerHTML = "Hello!";
    }, 1000);
})(window, document);
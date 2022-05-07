(function () {
    function identity(value, message) {
        console.log(value + ": " + typeof (value));
        console.log(message + ": " + typeof (message));
        var identity = {
            value: value,
            message: message
        };
        return identity;
    }
    console.log(identity(123, "test"));
})();

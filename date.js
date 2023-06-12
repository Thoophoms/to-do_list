exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

// if there is another function that you'd like to export!
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}


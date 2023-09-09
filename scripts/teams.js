$(document).ready(function () {
    // Array of texts for each topic
    var topics = [
        "Designing Team",
        "Development Team",
        "Media Team",
        "Event Organizer Team",
        "Public Relation Team",
        "Innovation and Projects Team"
    ];

var startDelay = 1000;

    // Typing speed (in milliseconds per character)
    var typingSpeed = 300;

    // Function to simulate typing
    function typeText(element, text, speed) {
        var currentText = "";
        var i = 0;
        var typeInterval = setInterval(function () {
            currentText += text[i];
            element.text(currentText);
            i++;
            if (i === text.length) {
                clearInterval(typeInterval);
            }
        }, speed);
    }

$(".topic").each(function (index) {
        var $topic = $(this);
        setTimeout(function () {
            typeText($topic, topics[index], typingSpeed);
        }, startDelay * index);
    });
});
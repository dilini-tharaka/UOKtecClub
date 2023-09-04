
var countdownRunning = false;

function startCountdown() {
  if (!countdownRunning) {
    countdownRunning = true;
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
            complete: function () {
              countdownRunning = false; 
            },
          }
        );
    });
  }
}

window.addEventListener("scroll", function () {
  var triggerPosition = 5500; 

  var placeholderPosition = document
    .getElementById("countdown-placeholder")
    .getBoundingClientRect().top;

  if (placeholderPosition < triggerPosition) {
    startCountdown();
  }
});


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

// .........contact form validation...........
function sendMessage() {
  var message = document.getElementById("message");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var mobile = document.getElementById("mobile");
  var isValid = true;

  // error messages
  var mobileError = document.getElementById("error-mobile");
  var emailError = document.getElementById("error-email");
  var messageError = document.getElementById("error-message");
  var nameError = document.getElementById("error-name");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^(?:7|0|(?:\+94))7[0, 1, 2, 4, 5, 6, 7, 8]{1}[0-9]{7}$/;

  if(!emailRegex.test(email.value)) {
      email.style.border = "2px solid red";
      emailError.style.display = "block";
      isValid = false;
  } else {
      email.style.border = "none";
      emailError.style.display = "none";
  }
  
  if(!mobileRegex.test(mobile.value)) {
      mobile.style.border = "2px solid red";
      mobileError.style.display = "block";
      isValid = false;
  } else {
      mobile.style.border = "none";
      mobileError.style.display = "none";
  }
  
  if(message.value == "") {
      message.style.border = "2px solid red";
      messageError.style.display = "block";
      isValid = false;
  } else {
      message.style.border = "none";
      messageError.style.display = "none";
  }
  
  if(name.value == "") {
      name.style.border = "2px solid red";
      nameError.style.display = "block";
      isValid = false;
  } else {
      name.style.border = "none";
      nameError.style.display = "none";
  }

  if(isValid){
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message Sent Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      message.value = "";
      name.value = "";
      email.value = "";
      mobile.value = "";
  }
}


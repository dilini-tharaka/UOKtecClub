function sendMessage() {
  var email = document.getElementById("email");
  var isValid = true;

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!emailRegex.test(email.value)) {
    email.style.border = "2px solid red";
    Swal.fire({
      position: "bottom-end",
      icon: "error",
      title: "Please Enter A Valid Email Address or Password",
      showConfirmButton: false,
      timer: 1500,
    });

    isValid = false;
  } else {
    email.style.border = "block";
    email.style.borderColor = "black";
  }

  if (pword.value == "") {
    pword.style.border = "2px solid red";
    isValid = false;
  } else {
    pword.style.border = "block";
    pword.style.borderColor = "black";
  }

  if (pword.value == "") {
    pword.style.border = "2px solid red";
    isValid = false;
  } else {
    pword.style.border = "block";
    pword.style.borderColor = "black";
  }

  if (isValid) {
    const form = new FormData();
    form.append(
      "data",
      JSON.stringify({
        email: email.value,
        password: pword.value,
      })
    );

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "./process/login.php", true);
    xhr.send(form);

    xhr.onload = function () {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        if(response.status == 'success') {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please Enter A Valid Email Address or Password",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Internel Server Error",
          text: "Please Try Again Later",
        });
      }
    };
    pword.value = "";
    email.value = "";
  }
}

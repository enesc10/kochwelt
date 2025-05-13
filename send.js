function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  if (document.forms["kontakt"]["name"].value.trim() === "") {
    alert("Please enter name");
    return false;
  } else if (document.forms["kontakt"]["email"].value.trim() === "") {
    alert("Please enter e_mail");
    return false;
  } else if (document.forms["kontakt"]["message"].value.trim() === "") {
    alert("Please enter message");
    return false;
  }

  fetch("https://formspree.io/f/xzzbygjq", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      alert("Form submitted successfully!");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send mail. Please try again.");
    });
}

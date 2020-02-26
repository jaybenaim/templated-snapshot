const form = document.querySelector("form");
const displayAlert = data => {
  const { name, email, message } = data;
  const messageConfirmed = `<div> <br /> Message sent to ${email}.<br />  </div> <br /> <div>Message: <p> ${message} <br />  from ${name}.</p> </div> `;
  $("form").append(messageConfirmed);
};

$(function() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formattedFormData = validateForm(formData);
    const { name, message } = formattedFormData;

    postData(formattedFormData);
  });
});
async function postData(formattedFormData) {
  const response = await fetch("http://localhost:8000/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ obj: "hello" })
  });
  const data = await response.json();

  console.log(data);
  const json = JSON.parse(data);

  displayAlert(formattedFormData);
}

const validateForm = form => {
  const name = form.find("#name").val();
  const email = form.find("#email").val();
  let message = form.find("#message").val();

  const regex = /<\w*/gm;
  const invalidName = name.match(regex);
  const invalidEmail = email.match(regex);
  const invalidMessage = message.match(regex);

  if (
    invalidName === null &&
    invalidEmail === null &&
    invalidMessage === null
  ) {
    message = `${message} \n from ${name}`;
    return { name, email, message };
  } else {
    alert("Nice try!\n Hack on! ");
    window.location.href = "http://www.staggeringbeauty.com/";
  }
};

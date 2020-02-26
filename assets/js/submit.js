const form = document.querySelector(".email-form");
const displayAlert = data => {
  const { name, message } = data;
  const messageConfirmed = `<div> <br /> Message sent.<br />  </div> <br /> <div>Message: <p> ${message} <br />  from ${name}.</p> </div> `;
  $(".email-form").append(messageConfirmed);
};

$(function() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = $(".email-form");

    const formattedFormData = validateForm(formData);
    const { name, message } = formattedFormData;

    if (formattedFormData) {
      window.open(
        `mailto:benaimjacob@gmail.com?subject=333%20Example%20Road%20%2D%20${name}&body=${message}`
      );

      displayAlert(formattedFormData);
    }
  });
});
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

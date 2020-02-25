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
    const name = formData.find("#name").val();
    const email = formData.find("#email").val();
    const message = formData.find("#message").val();
    const formattedFormData = { name, email, message };

    window.open(
      `mailto:benaimjacob@gmail.com?subject=333%20Example%20Road%20from%20${name}&body=${message}`
    );

    displayAlert(formattedFormData);
  });
});

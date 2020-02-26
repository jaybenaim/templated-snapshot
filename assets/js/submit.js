const form = document.querySelector("form");
const displayAlert = data => {
  const { name, email, message } = data;
  const messageConfirmed = `<div> <br /> Message sent to ${email}.<br />  </div> <br /> <div>Message: <p> ${message} <br />  from ${name}.</p> </div> `;
  $("form").append(messageConfirmed);
};

$(function() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formattedFormData = new FormData(form);
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

document.body.style.backgroundColor = "#03d6ce";
document.body.style.color = "#eeeeee";
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    return alert("Будь-ласка заповніть всі поля");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  e.currentTarget.reset();
}

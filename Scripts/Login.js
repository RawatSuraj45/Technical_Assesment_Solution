function LoginUser() {

  const email = document.getElementById('Email').value.trim();
  const password = document.getElementById('Password').value.trim(); 
  const users = JSON.parse(localStorage.getItem('users')) || [];
  // console.log(users);
  const user = users.find(user => 
    user.email === email && user.Password === password
  );

  if (user) {
    localStorage.setItem('session', JSON.stringify({ email }));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password. Please try again.");
  }

}

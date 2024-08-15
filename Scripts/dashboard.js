document.addEventListener("DOMContentLoaded", function() {

  const session = JSON.parse(localStorage.getItem('session'));
  // console.log(session);

  if (session && session.email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      user => user.email === session.email
    );
    
    if (user) {
      const welcomeMessage = document.getElementById('welcomeMessage');
      welcomeMessage.innerHTML = `Welcome, ${user.FirstName}`;
    } else {
      window.location.href = "login.html";
    }
  } else {
    window.location.href = "login.html";
  }
});

function logout() {
  localStorage.removeItem('session');
  window.location.href = "index.html";
}

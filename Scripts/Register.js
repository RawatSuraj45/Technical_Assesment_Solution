function UserRegistration() {

  let validation = true;
  let MessageStr = '';

  const Emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const Namepattern = /^[A-Za-z]{2,}$/;
  const phoneno = /^\d{10}$/;
  
  const email = document.getElementById('Email').value.trim();
  if (!Emailpattern.test(email)) {
    MessageStr += "Please enter a valid email address.\n";
    validation = false;
  }
  
  const FirstName = document.getElementById('Firstname').value.trim();
  // console.log(FirstName);
  if (!Namepattern.test(FirstName)) {
    MessageStr += "First Name must be alphabetic and at least 2 characters long.\n";
    validation = false;
  }
  
  const LastName = document.getElementById('Lastname').value.trim();
  if (!Namepattern.test(LastName)) {
    MessageStr += "Last Name must be alphabetic and at least 2 characters long.\n";
    validation = false;
  }
  
  const Password = document.getElementById('Password').value.trim();
  if (Password.length < 6) {
    MessageStr += "Password must be at least 6 characters long.\n";
    validation = false;
  }
  
  const PhoneNum = document.getElementById('Phone-Number').value.trim();
  if (!phoneno.test(PhoneNum)) {
    MessageStr += "Phone Number must be exactly 10 digits long.\n";
    validation = false;
  }
  
  if (!validation) {
    alert(MessageStr);
    return; 
  }
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(user => user.email === email)) {
    alert("This Email is already registered!");
    return; 
  }
  // console.log(users);
  
  users.push({ email, FirstName, LastName, Password, PhoneNum });
  localStorage.setItem('users', JSON.stringify(users));
  
  localStorage.setItem('session', JSON.stringify({ email }));
  
  window.location.href = "dashboard.html";

}

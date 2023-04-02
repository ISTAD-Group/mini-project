function validateUser() {
  // Admin account
  const users = [{ name: "Admin", username: "admin", pass: "7777" }];

  var name = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var isLogin = false;

  users.forEach((v) => {
    if (name == v.username) {
      if (pass == v.pass) {
        isLogin = true;
        window.location.href = "./admin/index.html";
      }
    }
  });
  if (!isLogin) {
    alert("Invalid account");
  }
}

import { renderSideBar } from "../components/sideBar.js";

renderSideBar();
const userInfo = document.querySelector(".user-info");

console.log(userInfo);

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    userInfo.innerHTML = `
    <div class="user-img">
    <img src=${user.photoURL} alt="">
    </div>
<div class="user-details">
    <div class="name">${user.displayName}</div>
    <button class="logout-btn">Log out</button>
</div>
   `;
    const btnLogout = document.querySelector(".logout-btn");
    btnLogout.addEventListener("click", handleLogout);
  } else {
    userInfo.innerHTML = `
    <button class="user-img" aria-label="Log in now">
    <i class="fas fa-user-circle"></i>
</button>
<div class="user-details">
    <div class="name">Have an account?</div>
    <button class="login-btn">Log in now</button>
</div>
    `;
    const btnLogin = document.querySelector(".login-btn");
    btnLogin.addEventListener("click", () => {
      window.location.href = "./login.html";
    });
  }

  function handleLogout() {
    firebase.auth().signOut();
    localStorage.removeItem('tempUserInfo');
    window.location.href = "./main.html";
  }
});
const profile = document.getElementById("profile");
profile.addEventListener("click", () => {
  window.location.href = "./profile.html";
});

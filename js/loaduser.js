const welcomename = document.querySelector(".welcome-name");
console.log(welcomename);
firebase.auth().onAuthStateChanged((user) => {
  welcomename.innerHTML = `Welcome ${user.displayName} <i class="far fa-hand-paper"></i>`;
});

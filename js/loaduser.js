const welcomename = document.querySelector(".welcome-name");
console.log(welcomename);
firebase.auth().onAuthStateChanged((user) => {
  welcomename.innerHTML = `Wellcome ${user.displayName}`;
});

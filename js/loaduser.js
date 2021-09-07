const welcomename = document.querySelector(".welcome-name");
console.log(welcomename);
firebase.auth().onAuthStateChanged((user) => {
  welcomename.innerHTML = `Welcome ${user.displayName} <i class="far fa-hand-paper"></i>`;
  localStorage.setItem('tempUserInfo', JSON.stringify(user));
});

// Tao 1 doc luu so quiz nguoi dung da lam
let userObject = JSON.parse(localStorage.getItem('tempUserInfo'));
db.collection("userQuizInfo").doc(userObject.email).set({
  email: userObject.email,
  displayName: userObject.displayName,
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});
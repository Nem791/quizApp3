const welcomename = document.querySelector(".welcome-name");
console.log(welcomename);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    welcomename.innerHTML = `Welcome ${user.displayName} <i class="far fa-hand-paper"></i>`;
  } else {
    welcomename.innerHTML = `Welcome <i class="far fa-hand-paper"></i>`;
  }
  localStorage.setItem("tempUserInfo", JSON.stringify(user));

  // Lay info tren Firebase
  let docRef = db.collection("userQuizInfo").doc(user.email);
  let docRefCreate = db.collection("userCreatedQuiz").doc(user.email);

  // Kiem tra xem info co trong Firebase chua
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        saveUserInfo(user);
        console.log("Da tao moi data nguoi dung`");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });


  docRefCreate
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        saveUserCreatedQuiz(user);
        console.log("Da tao moi data nguoi dung`");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
});


// Tao 1 doc luu so quiz nguoi dung da lam
function saveUserInfo(currentInfo) {
  db.collection("userQuizInfo")
    .doc(currentInfo.email)
    .set({
      email: currentInfo.email,
      displayName: currentInfo.displayName,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

// Tao 1 doc luu so quiz nguoi dung da tao 
function saveUserCreatedQuiz(currentInfo) {
  db.collection("userCreatedQuiz")
    .doc(currentInfo.email)
    .set({
      email: currentInfo.email,
      displayName: currentInfo.displayName
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

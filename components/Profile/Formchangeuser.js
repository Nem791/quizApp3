const formchange = document.querySelector(".profile-edit");

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  formchange.innerHTML = `
<div class="profile-edit-container">
  <div class="profile-edit-header">
    <span class="modal-title-wrapper">
      <div class="modal-icon"><img src="https://cf.quizizz.com/img/profile_edit_icon.png" alt=""></div>
      <div class="modal-title">Edit Profile</div>
    </span>

  </div>
  <hr class="hr-section" aria-hidden="true">
  <div class="profile-edit-body">
    <div class="section-wrapper">
      <div class="section-title ">
        <div class="section-icon"><i class="fas fa-user" aria-hidden="true"></i></div>
        <div class="title-text">Account Information</div>
      </div>
    </div>
    <div class="field-wrapper">
      <div class="field-fullname">
        <label>FullName</label>
        <input type="text" name="fullname" value="${user.displayName}">

      </div>
      <div class="field-email">
        <label>Link ImageAvatar</label>
        <input type="text" name="avatar" value=${user.photoURL}>

      </div>
    </div>
    <hr class="hr-section" aria-hidden="true">
    <div class="action-btn-wrapper">
      <button class="cancel-btn">CANCEL</button>
      <button class="signup-btn btn-save" id="org-save">
        <span class="">SAVE CHANGES</span>
      </button>
    </div>


  </div>

  <div class="profile-edit-footer"></div>
</div>
`;

  const btnseve = document.querySelector(".btn-save");
  btnseve.addEventListener("click", handleSave);

  function handleSave() {
    const user = firebase.auth().currentUser;
    const fullname = document.querySelector('input[name="fullname"]').value;
    const photoURL = document.querySelector('input[name="avatar"]').value;

    user
      .updateProfile({
        displayName: fullname,
        photoURL: photoURL,
      })
      .then(() => {
        alert("Sửa thành cồng");
        window.location.href = "./profile.html";
      })
      .catch((error) => {
        alert("loi");
      });
  }
});

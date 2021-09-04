const setting = document.querySelector(".select");
firebase.auth().onAuthStateChanged((user) => {
  setting.innerHTML = `
<div class="signup-header"><img class="settings-logo" src="https://cf.quizizz.com/img/gears_icon.png" alt="">
  <h1 class="title">Settings</h1>
</div>
<div class="settings-control-wrapper">
  <div class="category-label"><span class="cat-icon cat-user"><i class="fas fa-user"></i></span><span
      class="cat-name">Account</span></div>
</div>
<hr class="hr-section" aria-hidden="true">
<div class="field email">
  <label>Email</label>
  <input type="email" name="email" id="email" class="text-box" value="${user.email}">
</div>
<button class="btn-update" id="update-email">Save Changes</button>

<div class="category-label">
  <span class="cat-icon">
    <i class="fas fa-lock" aria-hidden="true">
    </i>
  </span>
  <span class="cat-name">Password</span>
</div>
<hr class="hr-section" aria-hidden="true">

<div class="field new-password">
  <label>New password</label>
  <input type="password" name="" id="new-password" class="text-box">
</div>
<div class="field new-password">
  <label>New password agin</label>
  <input type="password" name="" id="new-password" class="text-box">
</div>
<button class="btn-update">Update Password</button>


<div class="category-label">
  <span class="cat-icon">
    <i class="fas fa-trash-alt" aria-hidden="true">
    </i>
  </span>
  <span class="cat-name">Delete Account</span>
</div>
<hr class="hr-section" aria-hidden="true">
<div class="delete-acc-msg">Permanently delete your account</div>
<button class="btn-delete">Delete Account</button>


`;
  const updateEmail = document.getElementById("update-email");
  updateEmail.addEventListener("click", () => {
    const updateEmail = document.querySelector('input[name="email"]').value;
    const user = firebase.auth().currentUser;
    console.log(user);

    user
      .updateEmail("mama@gmail.com")
      .then(() => {
        alert("Đổi thành công");
        // ...
      })
      .catch((error) => {
        alert("Lỗi rồi");
      });
  });
});

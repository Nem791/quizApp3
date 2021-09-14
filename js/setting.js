// import { Login } from "../components/Auth/Login.js";

const setting = document.querySelector(".select");
const user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged((user) => {
  console.log(typeof user.emailVerified);
  if (!user.emailVerified) {
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
  <label>Confirm Password</label>
  <input type="password" name="confirmPassword" id="confirm-password" class="text-box">
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
  <label>Old password</label>
  <input type="password" name="oldpassword" id="new-password" class="text-box">
</div>
<div class="field new-password">
  <label>New password</label>
  <input type="password" name="password" id="new-password" class="text-box">
</div>
<div class="field new-password">
  <label>New password agin</label>
  <input type="password" name="aginpassword" id="new-password" class="text-box">
</div>
<button class="btn-update" id="update-password">Update Password</button>


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
  } else {
    setting.innerHTML = `
<div>Tính năng đổi thông tin đang phát triển với dạng đăng nhập Googole</div>
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
  <input type="email" name="email" id="email" class="text-box" value="${user.email}" disabled>
  <label>Confirm Password</label>
  <input type="password" name="confirmPassword" id="confirm-password" class="text-box" disabled>
</div>
<button class="btn-update btn-disabled " id="update-email">Save Changes</button>

<div class="category-label">
  <span class="cat-icon">
    <i class="fas fa-lock" aria-hidden="true">
    </i>
  </span>
  <span class="cat-name">Password</span>
</div>
<hr class="hr-section" aria-hidden="true">

<div class="field new-password">
  <label>Old password</label>
  <input type="password" name="oldpassword" id="new-password" class="text-box" disabled>
</div>
<div class="field new-password">
  <label>New password</label>
  <input type="password" name="password" id="new-password" class="text-box" disabled>
</div>
<div class="field new-password">
  <label>New password agin</label>
  <input type="password" name="aginpassword" id="new-password" class="text-box" disabled>
</div>
<button class="btn-update btn-disabled  " id="update-password">Update Password</button>


<div class="category-label">
  <span class="cat-icon">
    <i class="fas fa-trash-alt" aria-hidden="true">
    </i>
  </span>
  <span class="cat-name">Delete Account</span>
</div>
<hr class="hr-section" aria-hidden="true">
<div class="delete-acc-msg">Permanently delete your account</div>
<button class="btn-delete ">Delete Account</button>


`;
  }

  //// Change Email Người dùng
  const updateEmail = document.getElementById("update-email");
  updateEmail.addEventListener("click", () => {
    const user = firebase.auth().currentUser;
    const newEmail = document.querySelector('input[name ="email"]').value;
    const confirmPassword = document.querySelector(
      'input[name ="confirmPassword"]'
    ).value;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      confirmPassword
    );
    console.log(credential);

    // TODO(you): prompt the user to re-provide their sign-in credential

    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        // User re-authenticated.
        user
          .updateEmail(newEmail)
          .then(() => {
            // Update successful
            Swal.fire({
              icon: "success",
              title: "Thông báo",
              text: "Đổi thành công",
            }).then(() => {
              window.location.href = "./profile.html";
            });

            // alert("Đổi thành công");
            // window.location.href = "./profile.html";
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
            alert("loi");
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oh Có Lỗi Xảy Ra",
          text: `${error}`,
        });
      });
  });

  //// Change Password người dùng

  const updatePassword = document.getElementById("update-password");
  updatePassword.addEventListener("click", () => {
    const user = firebase.auth().currentUser;
    const newPassword = document.querySelector('input[name="password"]').value;
    const aginPassword = document.querySelector(
      'input[name ="aginpassword"]'
    ).value;
    const confirmPassword = document.querySelector(
      'input[name ="oldpassword"]'
    ).value;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      confirmPassword
    );
    console.log(credential);

    // TODO(you): prompt the user to re-provide their sign-in credential

    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        // User re-authenticated.
        if (newPassword === aginPassword) {
          user
            .updatePassword(newPassword)
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Thông báo",
                text: "Đổi thành công",
              }).then(() => {
                window.location.href = "./profile.html";
              });
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              alert("Mật khẩu mới không được để trống");
            });
        } else {
          alert("Mật khẩu chưa trùng khớp");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oh Có Lỗi Xảy Ra",
          text: `${error}`,
        });
      });
  });
});

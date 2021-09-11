const pageinner = document.querySelector(".profile-view");
const linkfb = localStorage.getItem("fb");
console.log(linkfb);
firebase.auth().onAuthStateChanged((user) => {
  pageinner.innerHTML = `

<div class="profile-container-v4 container-fluid">
    <div class="profile-row">
        <div class="container-left container-full">
            <div class="row-profile-header ">
                <div class="row-top">
                    <div class="col-left">
                        <div class="profile-image">

                            <img src="${user.photoURL}" alt="">
                        </div>
                    </div>
                    <div class="col-middle">
                        <div class="profile-user">
                            <div class="profile-user-name-wrapper">
                                <h1 title="${user.displayName} " class="">${user.displayName}</h1>
                                <div class="social-icons">
                                    <a href="${linkfb}" class="icon icon-twitter">
                                        <i class="fab fa-twitter">
                                        </i>
                                    </a>
                                    <a href= ${linkfb} class="icon icon-fb">
                                        <i class="fab fa-facebook">
                                        </i>
                                    </a>
                                </div>
                            </div>

                            <div class="username "> ${user.email} <span class="occupation-label  student">
                                    PROFESSIONAL </span></div>

                        </div>
                    </div>
                    <div class="col-right">
                        <div class="edit-profile-btn-wrapper"><button class="btn btn-edit-profile"><i
                                    class="far fa-edit" aria-hidden="true"></i><span> Edit Profile
                                </span></button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>


</div>




`;
  const tabquizzes = document.querySelector(".tab-quizzes");
  const tabcollections = document.querySelector(".tab-collections");
  const tabmemesets = document.querySelector(".tab-memesets");
  const clickedit = document.querySelector(".btn-edit-profile");
  const clickclose = document.querySelector(".cancel-btn");

  const tabselection = document.querySelector(".tab-selection ");
  const profile = document.querySelector(".profile-edit");

  clickedit.addEventListener("click", () => {
    profile.classList.add("active");
  });
  clickclose.addEventListener("click", () => {
    profile.classList.remove("active");
  });
});

//// Render Setting Account

const pageinner = document.querySelector(".profile-view");
firebase.auth().onAuthStateChanged((user) => {
  pageinner.innerHTML = `

<div class="profile-container-v4 container-fluid">
    <div class="profile-row">
        <div class="container-left container-full">
            <div class="row-profile-header ">
                <div class="row-top">
                    <div class="col-left">
                        <div class="profile-image">
                            <!-- <div class="edit-image hidden ">
                                                <div class="overlay"></div>
                                                <div class="text-layer"><span>edit</span><input
                                                        class="upload-profile-image" type="file" accept="image/*">
                                                </div>
                                            </div> -->
                            <img src="${user.photoURL}" alt="">
                        </div>
                    </div>
                    <div class="col-middle">
                        <div class="profile-user">
                            <div class="profile-user-name-wrapper">
                                <h1 title="${user.displayName} " class="">${user.displayName}</h1>
                                <div class="social-icons"><button class="icon icon-twitter" role="link" tabindex="0"
                                        aria-label="Twitter"><i class="fab fa-twitter"
                                            aria-hidden="true"></i></button><button class="icon icon-fb" role="link"
                                        tabindex="0" aria-label="Facebook"><i class="fab fa-facebook"
                                            aria-hidden="true"></i></button>
                                </div>
                            </div>

                            <div class="username "> ${user.email} <span class="occupation-label  student">
                                    PROFESSIONAL </span></div>
                            <!-- <div class="profile-info">
                                                <div class="subjects-list hidden hidden"><span class="subject-icon"><i
                                                            class="fas fa-book"
                                                            aria-hidden="true"></i></span><span></span></div>
                                                <div class="organization-wrapper ">
                                                    <div class="organization hidden"><span class="organization-icon"><i
                                                                class="fas fa-graduation-cap"
                                                                aria-hidden="true"></i></span><span></span></div>
                                                    <div class="grades-list hidden hidden"><span
                                                            class="grade-icon"></span><span></span></div>
                                                </div>
                                            </div> -->
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

class InfoUser {
  $container;
  $header;
  $rowtop;

  $colleft;
  $colmiddle;
  $colright;

  $rowbottom;

  constructor() {
    this.$container = document.createElement("div");

    this.$header = document.createElement("div");

    this.$rowtop = document.createElement("div");

    this.$colleft = document.createElement("div");
    this.$colleft.innerHTML = `
    <div class="profile-image">
      </div>
      <img
        src="https://lh3.googleusercontent.com/a-/AOh14GhYf7iIvFB_2FUAKU4IOkvBNYLc8TFiBp4rgUbwnw=s96-c?w=90&amp;h=90"
        alt="">
    </div>
    `;

    this.$colmiddle = document.createElement("div");
    this.$colmiddle.innerHTML = `
    <div class="profile-user-name-wrapper">
    <h1 title="Hùng Dương " class="">Hùng Dương </h1>
    <div class="social-icons"><button class="icon icon-twitter" role="link" tabindex="0" aria-label="Twitter"><i
          class="fab fa-twitter" aria-hidden="true"></i></button><button class="icon icon-fb" role="link" tabindex="0"
        aria-label="Facebook"><i class="fab fa-facebook" aria-hidden="true"></i></button></div>
  </div>
  <div class="username "> @oloxo9x_28463 <span class="occupation-label  student"> PROFESSIONAL </span></div>
    `;

    this.$colright = document.createElement("div");
    this.$colright.innerHTML = `
    <div class="col-right">
    <div class="edit-profile-btn-wrapper"><button class="btn btn-edit-profile"><i class="far fa-edit"
          aria-hidden="true"></i><span> Edit Profile </span></button></div>
  </div>
    `;
    this.$rowbottom = document.createElement("div");
    this.$rowbottom.innerHTML = `
  <div class="profile-tabs-container tab-container">
  <div class="tabs" role="tablist"><button class="tab tab-quizzes selected" data-tab="quizzes" role="tab"
      aria-selected="true">Quizzes</button><button class="tab tab-collections " data-tab="collections" role="tab"
      aria-selected="false">Collections</button><button class="tab tab-memesets " data-tab="memesets" role="tab"
      aria-selected="false">Meme sets</button><span class="tab-selection quizizz"></span></div>
</div>
  `;
  }
  render() {
    this.$rowtop.appendChild(this.$colleft);
    this.$rowtop.appendChild(this.$colmiddle);
    this.$rowtop.appendChild(this.$colright);

    this.$header.appendChild(this.$rowtop);
    this.$header.appendChild(this.$rowbottom);
    this.$container.appendChild(this.$header);
    return this.$container;
  }
}
export { InfoUser };

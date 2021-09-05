// import '../public/homepage'
class LoginGoogle {
  src;
  content;

  $container;
  $btnLogo;
  $LogoImg;
  $btnContent;

  constructor(src, content, setActive) {
    this.src = src;
    this.content = content;
    this.setActive = setActive;

    this.$container = document.createElement("button");
    this.$container.classList.add("btn-login");
    this.$container.addEventListener("click", this.handleGoogleLogin);

    this.$btnLogo = document.createElement("span");
    this.$btnLogo.classList.add("logo-wrapper");

    this.$LogoImg = document.createElement("img");
    this.$LogoImg.src = this.src;

    this.$btnContent = document.createElement("span");
    this.$btnContent.innerHTML = this.content;
    this.$btnContent.classList.add("btn-label");
  }

  handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider.providerId);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res.user);
        window.location.href = "./main.html";
      });
  };
  render() {
    this.$btnLogo.appendChild(this.$LogoImg);
    this.$container.appendChild(this.$btnLogo);
    this.$container.appendChild(this.$btnContent);

    return this.$container;
  }
}
export { LoginGoogle };

class ViewItem {
  $container;
  $image;
  $data;
  $contentTypeTitle;
  $name;

  $details;
  $questionLength;
  $played;

  $createdBy;
  $userImg;
  $userData;
  $username;

  constructor() {
    this.$container = document.createElement("li");
    this.$container.classList.add("search-results-item");

    this.$image = document.createElement("div");
    this.$image.classList.add("image");
    this.$image.style.backgroundImage =
      "url(https://cf.quizizz.com/img/logos/new/logo_placeholder_sm.png?w=90&amp;h=90)";

    this.$data = document.createElement("div");
    this.$data.classList.add("data");

    this.$contentTypeTitle = document.createElement("div");
    this.$contentTypeTitle.classList.add("content-type-title");

    this.$name = document.createElement("div");
    this.$name.classList.add("name");

    this.$details = document.createElement("div");
    this.$details.classList.add("details");

    this.$questionLength = document.createElement("div");
    this.$questionLength.classList.add("questions-length");
    this.$questionLength.innerHTML = `<i class="fas fa-list no-absolute"></i>`;

    this.$played = document.createElement("div");
    this.$played.classList.add("played");
    this.$played.innerHTML = `<i class="fas fa-play no-absolute"></i> Already played`;

    this.$createdBy = document.createElement("div");
    this.$createdBy.classList.add("created-by");

    this.$userImg = document.createElement("div");
    this.$userImg.classList.add("user-img");
    this.$userImg.style.backgroundImage = `url(https://lh3.googleusercontent.com/a-/AOh14Gggzvqn-YiHEPtNfu6BPdWmAjxQQGthaXK0E1c6FQ=s96-c?w=90&amp;h=90)`;

    this.$userData = document.createElement("div");
    this.$userData.classList.add("user-data");

    this.$username = document.createElement("a");
    this.$username.classList.add("username");
  }

  render() {
    this.$userData.appendChild(this.$username);

    this.$createdBy.appendChild(this.$userImg);
    this.$createdBy.appendChild(this.$userData);

    this.$details.appendChild(this.$questionLength);
    this.$details.appendChild(this.$played);

    this.$data.appendChild(this.$contentTypeTitle);
    // this.$data.appendChild(this.$name);
    this.$data.appendChild(this.$details);
    this.$data.appendChild(this.$createdBy);

    this.$container.appendChild(this.$image);
    this.$container.appendChild(this.$data);
    return this.$container;
  }
}
export { ViewItem };

class Loading {
  $container;
  $title;
  constructor() {
    this.$container = document.createElement("div");

    this.$title = document.createElement("h1");
    this.$title.innerHTML = "Loading";
  }
  render() {
    this.$container.appendChild(this.$title);
    return this.$container;
  }
}
export { Loading };

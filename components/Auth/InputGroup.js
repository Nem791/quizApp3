class InputGroup {
  $container;
  $input;
  $label;
  $errorMsg;

  constructor(label, type, name) {
    this.$container = document.createElement("div");
    this.$container.classList.add("input-container");

    this.$input = document.createElement("input");
    this.$input.type = type;
    this.$input.name = name;
  

    this.$label = document.createElement("label");
    this.$label.innerHTML = label;

    this.$errorMsg = document.createElement("div");
    this.$errorMsg.classList.add("error-msg");
  }

  getInputValue() {
    return this.$input.value;
  }

  setError(message) {
    if (message) {
      this.$errorMsg.innerHTML = message;
      this.$container.classList.add("has-error");
    } else {
      this.$errorMsg.innerHTML = "";
      this.$errorMsg.classList.remove("has-error");
    }
  }
  render() {
    this.$label.appendChild(this.$input);
    this.$container.appendChild(this.$label);
    this.$container.appendChild(this.$errorMsg);
    return this.$container;
  }
}

export { InputGroup };

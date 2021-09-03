import { InfoUser } from "./info-user.js";

const app = document.getElementById("app");
const infoUser = new InfoUser();
const html = infoUser.render();
console.log(typeof html);
app.appendChild(html);

// class Profile {
//   $container;
//   $hung;
//   constructor() {
//     this.$container = document.createElement("div");
//     this.$hung = new InfoUser();
//   }
//   render() {
//     this.$container.appendChild(this.$hung.render());
//     return this.$container;
//   }
// }
// export { Profile };

import { Login } from "./components/Auth/Login.js";
import { Loading } from "./components/Auth/loading.js";
import { Register } from "./components/Auth/Register.js";
import { setScreen } from "./app.js";

const login = new Login();

const loading = new Loading();
const register = new Register();
setScreen(login);

// firebase.auth().onAuthStateChanged((user) => {
//   console.log(user);
//   if (user) {
//     const content = new Content();
//     setScreen(content);
//   } else {
//     const login = new Auth();
//     setScreen(login);
//   }
// });

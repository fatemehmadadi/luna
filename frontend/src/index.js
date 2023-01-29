import homeScreen from "./screens/homeScreen.js";
import Error404screen from "./screens/Error404Screen.js";
import productScreen from "./screens/poruductScreen.js";
import productsScreen from "./screens/poruductsScreen.js";
import aboutUsScreen from "./screens/aboutUsScreen.js";
import cartScreen from "./screens/cartScreen"
import loginscreen from "./screens/loginscreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./Utils.js";
import Header from "./screens/headerScreen.js";
import Footer from "./screens/footer";
import Registerscreen from "./screens/registerScreen.js";
import Profilescreen from "./screens/profileScreen.js";
import shippingScreen from "./screens/shippingScreen.js"
import paymentscreen from "./screens/paymentScreen.js";
import placeOrder from "./screens/placeorderScreen.js";
import orderScreen from "./screens/orderScreen.js";

const routes = {
  "/": homeScreen,
  "/product/:id": productScreen,
  '/order/:id': orderScreen,
  "/aboutus": aboutUsScreen,
  "/products": productsScreen,
  "/cart": cartScreen,
  "/cart/:id": cartScreen,
  "/login": loginscreen,
  "/register": Registerscreen,
  "/profile": Profilescreen,
  "/shipping": shippingScreen,
  "/payment": paymentscreen,
  "/placeorder": placeOrder
};

const router = async () => {
  showLoading()
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404screen;

  const header = document.getElementById("header-content");
  header.innerHTML = await Header.render();
  await Header.after_render();
  const main = document.getElementById("main-content");
  main.innerHTML = await screen.render();
  if (screen.after_render) {
    await screen.after_render();
  }
  const footer = document.getElementById("footer-content");
  footer.innerHTML = await Footer.render();
  hideLoading()
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

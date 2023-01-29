import { getCartItems } from "./localStoreg";

export const parseRequestUrl = () => {
  const url = document.location.hash.toLocaleLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

export const rerender = async (component) => {
  document.getElementById("main-content").innerHTML =
    await component.render();
    await component.after_render();
};

export  const showLoading =()=>{
  document.getElementById("loding-overlay").classList.add("overlay-active");
};

export  const hideLoading =()=>{
  document.getElementById("loding-overlay").classList.remove("overlay-active");
};

export  const showMessage =(message,callback)=>{
  document.getElementById("message-overlay").innerHTML =`
  <div>
    <div id="message-overlay-content">${message}</div>
    <button class="btn-tertiary overlay-btn" id="message-overlay-content-close">تایید</button>
  </div>
  `
  document.getElementById("message-overlay").classList.add("overlay-active");
  document.getElementById("message-overlay-content-close").addEventListener("click",()=>{
    document.getElementById("message-overlay").classList.remove("overlay-active");
  })
}
export const redirectUser = () => {
  if (getCartItems().length !== 0) {
    document.location.hash ="/shipping"
  } else {
    document.location.hash="/"
  }
}

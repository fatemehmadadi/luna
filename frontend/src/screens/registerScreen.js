import { Register } from "../api";
import { getUserInfo, setUserInfo } from "../localStoreg";
import { hideLoading, redirectUser, showLoading, showMessage } from "../Utils";

const Registerscreen = {
    after_render: () => {
        document.getElementById("register-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault();
                showLoading()
                const data = await Register({
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value
                });
                hideLoading()
                if (data.error) {
                    showMessage(data.error);
                } else {
                    setUserInfo(data);
                    redirectUser();
                };
            });
    },
    render: () => {
        if (getUserInfo().name) {
            redirectUser();
        }
        return `
        <section class="formSection">
            <div class="form-box">
                <form id="register-form">
                    <div class="row">
                        <label for="name">نام</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="لطفا نام خود را وارد کنید"
                            />
                    </div>

                    <div class="row">
                        <label for="email">ایمیل</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="لطفا ایمیل خود را وارد کنید"
                            />
                    </div>
                    <div class="row">
                        <label for="password">پسورد</label>
                        <input
                        type="password"
                        id="password"
                        placeholder="لطفا پسورد خود را وارد کنید"
                        max="10"
                        min="8"
                        />
                    </div>

                     <div class="row">
                        <label for="repassword"></label>
                        <input
                        type="password"
                        id="repassword"
                        placeholder="لطفا پسورد خود را مجددا تکرار کنید"
                        max="10"
                        min="8"
                        />
                    </div>
                    <div class="row-btn">
                    <button type="submit" class="btn-tertiary">ثبت نام</button>
                    </div>
                    <a href="/#/login">ورود به حساب کاربری</a>
                </form>
                <div class="img_box">
                    <img src="./image/seaction1/modal.jpg" alt="image" />
                </div>
            </div>
        </section>   
        `
    }
}

export default Registerscreen;
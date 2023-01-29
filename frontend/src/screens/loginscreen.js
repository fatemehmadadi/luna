import { login } from "../api";
import { getUserInfo, setUserInfo } from "../localStoreg";
import { hideLoading, redirectUser, showLoading, showMessage } from "../Utils";

const loginscreen = {
    after_render: () => {
        document.getElementById("login-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault();
                showLoading()
                const data = await login({
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value
                });
                hideLoading()
                if (data.error) {
                showMessage(data.error);
                } else {
                    console.log(data);
                    setUserInfo(data);
                    redirectUser();
                };
            });
    },
    render: () => {
        if(getUserInfo().name){
            redirectUser();
        }
        return `
        <section class="formSection">
            <div class="form-box">
                <form id="login-form">
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
                    <div class="row-btn">
                    <button type="submit" class="btn-tertiary">ورود</button>
                    </div>
                    <a href="/#/register">ایجاد حساب کاربری</a>
                </form>
                <div class="img_box">
                    <img src="./image/seaction1/modal.jpg" alt="image" />
                </div>
            </div>
        </section>   
        `
    }
}

export default loginscreen;
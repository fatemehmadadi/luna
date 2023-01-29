import { update } from "../api";
import { getUserInfo, setUserInfo ,clearUser} from "../localStoreg";
import { hideLoading, showLoading, showMessage} from "../Utils";

const Profilescreen = {
    after_render: () => {
        document.getElementById("profile-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault();
                showLoading()
                const data = await update({
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value
                });
                hideLoading()
                if (data.error) {
                    showMessage(data.error);
                } else {
                    console.log(data);
                    setUserInfo(data);
                    document.location.hash = "/"
                };
            });
        
        document.getElementById("logOut").addEventListener("click", () => {
            clearUser()
            document.location.hash = "/"
            
        })
    },
    render: () => {
        const { name, email } = getUserInfo();
        if (!name) {
            document.location.hash = "/"
        }
        return `
        <section class="profile">
            <div class="form-box">
                <form id="profile-form">
                    <div class="row">
                        <label for="name">نام</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="لطفا نام خود را وارد کنید"
                            value="${name}"
                            />
                    </div>

                    <div class="row">
                        <label for="email">ایمیل</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="لطفا ایمیل خود را وارد کنید"
                            value="${email}"
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
                    <button type="submit" class="btn-tertiary">به روز رسانی</button>
                    </div>
                    <div class="row-btn">
                    <button type="button" class="btn-tertiary logout" id="logOut">خروج از حساب</button>
                    </div>
                </form>
            </div>
        </section>   
        `
    }
}

export default Profilescreen;
import { getShipping, getUserInfo, setShipping } from "../localStoreg";
import checkoutStep from "./../components/checkoutStep"

const shippingscreen = {
    after_render: () => {
        document.getElementById("shipping-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault();
                setShipping({
                    phonNum: document.getElementById("phonNum").value,
                    address: document.getElementById("address").value,
                    city: document.getElementById("city").value,
                    postCode: document.getElementById("postCode").value
                });
                document.location.hash = "/payment"
            });
    },
    render: () => {
        const { name } = getUserInfo()
        if (!name) {
            document.location.hash = "/payment"
        }
        const { phonNum, address, city, postCode } = getShipping();
        return `
        ${checkoutStep.render({ step1: true, step2: true })}
        <section class="shipping">
            <div class="form-box">
                <form id="shipping-form">
                    <div class="row">
                        <label for="phonNum">شماره همراه</label>
                        <input
                            type="text"
                            id="phonNum"
                            placeholder="09......."
                            value="${phonNum}"
                            />
                    </div>
                    <div class="row">
                        <label for="address">آدرس</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="لطفا آدرس خود را وارد کنید"
                            value="${address}"
                            />
                    </div>
                    <div class="row">
                        <label for="city">شهر</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="لطفا شهر محل زندگی خود را وارد کنید"
                            value="${city}"
                            />
                    </div>
                    <div class="row">
                        <label for="postCode">کد پستی</label>
                        <input
                            type="text"
                            id="postCode"
                            placeholder="لطفا کد پستی خود را وارد کنید"
                            value="${postCode}"
                            />
                    </div>
                    <div class="row-btn">
                    <button type="submit" class="btn-tertiary logout">ادامه</button>
                    </div>
                </form>
            </div>
        </section>   
        `
    }
}

export default shippingscreen;
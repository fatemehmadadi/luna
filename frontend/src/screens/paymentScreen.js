import { getUserInfo, setPeyment } from "../localStoreg";
import checkoutStep from "../components/checkoutStep"

const shippingscreen = {
    after_render: () => {
        document.getElementById("shipping-form")
            .addEventListener("submit", async (e) => {
                e.preventDefault();
                const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
                setPeyment({ paymentMethod })
                document.location.hash = "/placeorder";
            });
    },
    render: () => {
        const { name } = getUserInfo()
        if (!name) {
            document.location.hash = "/placeorder"
        }
        return `
        ${checkoutStep.render({ step1: true, step2: true, step3: true })}
        <section class="shipping">
            <div class="form-box">
                <form id="shipping-form">
                    <div class="">
                        <input
                            type="radio"
                            id="melli"
                            value="درگاه3"
                            name="payment"
                            checked/> 
                            <label for="melli">درگاه1</label>
                    </div> 
                      <div class="">
                        <input
                            type="radio"
                            id="melli"
                            value="درگاه1"
                            name="payment"
                           /> 
                            <label for="melli">درگاه2</label>
                    </div>   
                    <div class="row-btn">
                    <button type="submit" class="btn-tertiary logout" id="logOut">ادامه</button>
                    </div>
                </form>
            </div>
        </section>   
        `
    }
}

export default shippingscreen;
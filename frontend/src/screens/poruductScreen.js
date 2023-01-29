import { getProduct } from '../api';
import Rating from '../components/Rating';
import {hideLoading, parseRequestUrl, showLoading} from './../Utils'

const productScreen = {
    render: async () => {
        const reqest = parseRequestUrl();
        showLoading()
        const product = await getProduct(reqest.id);
        if (product.error) {
            return `
                <div>${product.error}</div>
            `
        }
        hideLoading()
        return `
        <section class="sproduce"> 
        <div class="left-item">
                <img src="${product.image}" alt="">
        </div>
        <div class="right-item">
            <h1 class="heading_primary">${product.name}</h1>
            <h5><span id="price">${product.price}</span>تومان</h5>
            <div class = "rating-box">
                <div class = rating>
                    ${product.rating}
                </div>
                    ${Rating.render({ value: product.rating })}
            </div>
            ${product.availability > 0 ? `<a class="btn_primary" href="/#/cart/${product._id}">خرید</a>` : ``}
            <h3>توضیحات</h3>
            <p>${product.description}</p>
        </div>
       </section>
        `
    }
};
export default productScreen;
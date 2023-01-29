import {getProducts}  from '../api';
import { hideLoading, parseRequestUrl, showLoading } from './../Utils'
import Rating from "../components/Rating";

const productsScreen = {
  render: async () => {
    showLoading()
    const products = await getProducts();;
    if (products.error) {
      return `
            <div>${products.error}</div>   `
    }
    hideLoading()
    return `
         <!-- section headerProd -->
         <section class="header_prod">
         <div class="title">
           <h1 class="heading_primary"># محصولات</h1>
           <h3>با کمترین هزینه و بهترین کیفیت</h3>
         </div>
       </section>
       <!-- /section headerProd -->
        <!-- section product -->
        <section class="section_products">
          <!-- cart-->
          <div class="products" id="products">
              ${products
        .map(
          (product) => `
                <div class="prod">
              <img
                src="${product.image}"
                alt="photo"
                class="prod_img"
              />
              <h5 class="prod_title">${product.name}</h5>
              <div class="prod-detail">
                  <div class="prod_rating-num">${product.rating}</div>
                  ${Rating.render({ value: product.rating })}
              </div>
              <div class="prod-detail">
                ${product.availability > 0 ? `<div class="prod-inventory-true">موجود در انبار</div>` : `<div class="prod-inventory-false">ناموجود</div>`}
                <div class="prod-price"><span>${product.price}</span>تومان</div>
              </div>
              <div class="prod-detail">
                <a href="/#/product/${product._id}" class="btn_secondery">اطلاعات بیشتر</a>
                <div class="discount_price"><span>${product.discount}</span>تومان</div>
              </div>
            </div>
            `
        )
        .join("\n")}
          </div> 
        </section>
        <!-- /section product -->
        <!-- news -->
        <section class="news">
          <div class="news-text">
            <h1>حساب کاربریت ایجاد کن از ما <span>هدیه</span> بگیر</h1>
          </div>
          <form class="email">
            <a class="normal" id="newsShowmodall">عضویت</a>
            <input
              type="email"
              id="newsEmail"
              placeholder="ایمیل خود را وارد کنید"
            />
          </form>
        </section>
        <!--/news -->
        `;
  },
};


export default productsScreen;

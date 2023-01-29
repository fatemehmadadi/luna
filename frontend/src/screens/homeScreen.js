import { getProducts } from "../api";
import Rating from "../components/Rating";
const homeScreen = {
  render: async () => {
    const products = await getProducts();
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
    products.length = 8 ;
    return `
       <!-- section header -->
        <section class="section_header">
          <!-- right item -->
          <div class="right_item">
            <h1 class="right_item--h1 heading_primary">لونا محافظ پوست شما</h1>
            <h3 class="right_item--h3 heading-secondary">
              تخفیف های باور نکردنی
            </h3>
            <h4 class="right_item--h4 heading-tertiery">ارسال رایگان</h4>
            <a class="right_item--btn btn_primary" href="/#/Products"
              >اطلاعت بیشتر</a
            >
          </div>
          <!-- left item -->
          <div class="left_item">
            <img src="./image/seaction1/imag1.png" alt="image" />
          </div>
        </section>
        <!-- /section header -->
        <!-- section besrProduct -->
        <section class="section_bestProducts">
          <!-- header -->
          <h1 class="section_bestProducts-h1 heading_primary">
            برترین های هفته
          </h1>
          <!-- best product -->
          <ul class="products">
            <li>
              <a href="/#/">
                <img src="./image/products/product1.jpg" alt="product" />
                <h6 class="heading_fourth">ادکلن (GUCC)</h6>
                <div class="price">
                  <span class="main_price"><span>48000</span>تومان</span>
                  <span class="discount_price"><span>45000</span>تومان</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/#/">
                <img src="./image/products/product2.jpg" alt="product" />
                <h6 class="heading_fourth">ادکلن (GUCC)</h6>
                <div class="price">
                  <span class="main_price"><span>48000</span>تومان</span>
                  <span class="discount_price"><span>45000</span>تومان</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/#/">
                <img src="./image/products/product3.jpg" alt="product" />
                <h6 class="heading_fourth">ادکلن (GUCC)</h6>
                <div class="price">
                  <span class="main_price"><span>48000</span>تومان</span>
                  <span class="discount_price"><span>45000</span>تومان</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/#/">
                <img src="./image/products/product4.jpg" alt="product" />
                <h6 class="heading_fourth">ادکلن (GUCC)</h6>
                <div class="price">
                  <span class="main_price"><span>48000</span>تومان</span>
                  <span class="discount_price"><span>45000</span>تومان</span>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <!-- /best product -->
        <!-- section feature -->
        <section class="section_feature">
          <!-- link -->
          <ul class="feature">
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/" class="feature_link">
                  <i class="fas fa-user-plus"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">عضویت</h4>
                <p class="feature_description-text">
                  با عضویت در سایت از تخفیف های ما آگاه شوید
                </p>
              </div>
            </li>
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/" class="feature_link">
                  <i class="fas fa-calendar-alt"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">زمان ارسال</h4>
                <p class="feature_description-text">
                  ارسال در کمترین زمان ممکن با بهترین قیمت ها
                </p>
              </div>
            </li>
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/" class="feature_link">
                  <i class="fas fa-handshake"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">همکاری با ما</h4>
                <p class="feature_description-text">لونا آماده همکاری با شما</p>
              </div>
            </li>
            <li class="feature_box">
              <div class="icon_box">
                <a href="/#/" class="feature_link">
                  <i class="fas fa-headset"></i>
                </a>
              </div>
              <div class="feature_description">
                <h4 class="feature_description-header">پشتیبانی</h4>
                <p class="feature_description-text">
                  ارسال در کمترین زمان ممکن با بهترین قیمت ها
                </p>
              </div>
            </li>
          </ul>
        </section>
        <!-- /section feature -->
        <!-- section product -->
        <section class="section_products">
          <!-- header -->
          <h1 class="section_Products-h1 heading_primary">پیشنهاد لونا</h1>
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
          <a class="btn-tertiary" href="/#/products">بیشتر</a>
        </section>
        <!-- /section product -->
        <!-- section baner -->
        <section class="section_baner">
          <div class="baner-content-top">
            <div class="baner-box baner-box-1">
              <h1>یکی بخر دوتا ببر</h1>
              <h2>با بهترین کیفیت با کمترین هزینه خرید کن</h2>
              <a class="btn-tertiary" href="#">اطلاعات بیشتر</a>
            </div>
            <div class="baner-box baner-box-2">
              <h1>روتین هفتگی تخفیف هفتگی</h1>
              <h2>با بهترین کیفیت با کمترین هزینه خرید کن</h2>
              <a class="btn-tertiary" href="#">اطلاعات بیشتر</a>
            </div>
          </div>
          <div class="baner-content-bottom">
            <div class="baner-box baner-box1">
              <div class="baner-img">
                <img src="./image/baner/baner3.jpg" alt="img" />
              </div>
              <div class="baner-descript">
                <h4>خرید ادکلن ارجینال با بهترین قیمت</h4>
                <a href="#" class="btn_fourth">اطلاعات بیشتر</a>
              </div>
            </div>
            <div class="baner-box baner-box2">
              <div class="baner-img">
                <img src="./image/baner/baner4.jpg" alt="img" />
              </div>
              <div class="baner-descript">
                <h4>خرید ادکلن ارجینال با بهترین قیمت</h4>
                <a href="#" class="btn_fourth">اطلاعات بیشتر</a>
              </div>
            </div>
            <div class="baner-box baner-box3">
              <div class="baner-img">
                <img src="./image/baner/baner5.jpg" alt="img" />
              </div>
              <div class="baner-descript">
                <h4>خرید ادکلن ارجینال با بهترین قیمت</h4>
                <a href="#" class="btn_fourth">اطلاعات بیشتر</a>
              </div>
            </div>
          </div>
        </section>
        <!-- /section baner -->
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

export default homeScreen;

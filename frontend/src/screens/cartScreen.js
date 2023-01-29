import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStoreg";
import { hideLoading, parseRequestUrl, rerender, showLoading } from "../Utils";
import Header from "./headerScreen";

const addToCart = (item, forceUpdate = false) => {
  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);
  if (existItem) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) =>
        x.product === existItem.product ? item : x
      );
    }

  } else {
    cartItems = [...cartItems, item];
  }
  if (forceUpdate) {
    rerender(cartScreen)
  }
  setCartItems(cartItems);
};

const removToCart = (id) => {
  setCartItems(getCartItems().filter((x) => x.product !== id));

  if (id === parseRequestUrl().id) {
    document.location.hash = "/cart"
  } else {
    rerender(cartScreen);
    rerender(Header)
  }
}

const cartScreen = {
  after_render: () => {
    const qtySelects = document.getElementsByClassName('qty-select');
    Array.from(qtySelects).forEach((qtySelect) => {
      qtySelect.addEventListener('change', (e) => {
        const price = document.getElementById("Price").innerHTML * 1;
        const totalcost = document.getElementById("fullP");
        const newTotal = totalcost.innerHTML = price * (qtySelect.value * 1)
        const item = getCartItems().find((x) => x.product === qtySelect.id);
        addToCart({ ...item, qty: Number(e.target.value), totalcost: newTotal }, true);
      });
    });

    const deletBtns = document.getElementsByClassName("deletBtn");
    Array.from(deletBtns).forEach((deletBtn) => {
      deletBtn.addEventListener("click", (e) => {
        removToCart(deletBtn.id)
      })
    })
  },
  render: async () => {
    const request = parseRequestUrl();
    if (request.id) {
      showLoading()
      const product = await getProduct(request.id);

      addToCart({
        product: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        availability: product.availability,
        qty: 1,
        totalcost: product.price
      })
    }
    const cartItems = getCartItems();
    hideLoading()
    return `
        <!-- section headerProd -->
        <section class="header_prod">
          <div class="title">
            <h1 class="heading_primary">#سبد خرید</h1>
            <h3>ارسال در اولین زمان بعد از ثبت خرید</h3>
          </div>
        </section>
        <!-- /section headerProd -->
        <!-- section Cart -->
        <section class="sectionCart">
          <table>
            <thead>
              <tr>
                <td>تصویر</td>
                <td>قیمت</td>
                <td>تعداد</td>
                <td>مجموع قیمت</td>
                <td>حذف</td>
              </tr>
            </thead>
            <tbody class="tbody">
              ${cartItems.length === 0 ? `<div class="empty">سبد خرید شما خالی است</div>` :
        cartItems.map(item => `
                  <tr>
                  <td><img src="${item.image}" alt="image"></td>
                  <td><span id="Price">${item.price}</span>تومان</td>
                  <td> <select class="qty-select" id="${item.product}">
                    ${[...Array(item.availability).keys()].map((x) =>
          item.qty === x + 1
            ? `<option selected value="${x + 1}">${x + 1}</option>`
            : `<option  value="${x + 1}">${x + 1}</option>`
        )}  

                  </select></td>
                  <td><span id="fullP">${item.totalcost}</span>تومان</td>
                  <td ><i class="fa fa-times-circle deletBtn" id="${item.product}"></i></td>
                </tr>
                `)
      }
            </tbody >
          </table >
        </section >
        <section id="full-price">
          <h4 class="">مجموع پرداخت</h4>
          <div class="detailSend">
            <h5> تعداد</h5>
            <h6>${cartItems.reduce((a, b) => a + b.qty, 0)}</h6>
          </div>
          <div class="detailSend">
            <h5>مجموع خرید</h5>
            <h6 id="fullprice">${cartItems.reduce((a, b) => a + b.price * b.qty, 0)}</h6>
          </div>
          <a class="btn-tertiary" href="/#/login">پرداخت</a>
        </section>
        <!-- /section Cart -->
  `;
  },
};
export default cartScreen;
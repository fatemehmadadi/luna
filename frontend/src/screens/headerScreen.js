import { getUserInfo, getCartItems } from "../localStoreg";
const numcart = () => {
  let cartItems = getCartItems();
  const exiteitem = cartItems.length; 
    return exiteitem
};

const Header = {
  after_render: () => {
    document.getElementById("cartNum").innerHTML = numcart();
  },
  render: () => {
    const { name } = getUserInfo()
    return `
      <div class="header">
      <!-- <navbar> -->
      <nav class="header_navbar">
        <!-- mobile -->
        <div class="mobile">
          <i class="fas fa-outdent outdent" id="outdent"></i>
        </div>
        <!-- <right item> -->
        <ul class="header_navbar--link" id="navbar">
          <li>
            محصولات ما
            <div>
              <ul>
                <li><a href="/#/shampo">شامپو</a></li>
                <li><a href="/#/perfume"> ادکلن</a></li>
                <li><a href="/#/lipstick">رژ</a></li>
                <li><a href="/#/cream">کرم پودر</a></li>
                <li><a href="/#/Concealer">کانسیلر</a></li>
                <li><a href="/#/eyeShadow">سایه چشم</a></li>
                <li><a href="/#/mascara">ریمل</a></li>
                <li><a href="/#/soap">صابون</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/#">صفحه اصلی</a></li>
          <li><a href="/#/aboutUs">درباره ما</a></li>
          <li class="header_navbar--serch">
            <form action="#" class="search">
              <button class="search-button">
                <i class="fas fa-search"></i>
              </button>
              <input type="text" placeholder="جستجو" class="search-input" />
            </form>
          </li>
          <li><i class="fas fa-close close"></i></li>
        </ul>

        <!-- <left item> -->
        <div class="header_navbar-left">
          <div class="header_navbar--user">
          ${name ? `<a href="/#/profile"><i class="fa-solid fa-user-check"></i></a>` : `<i class="fa-solid fa-user-xmark"></i>`}
          </div>
          <div class="header_navbar--basket">
            <a href="/#/cart"><i class="fas fa-shopping-cart"></i></a>
            <span class="header_navbar--basket-num" id="cartNum"></span>
          </div>
        </div>
      </nav>
      <!-- </navbar> -->
    </div>
      `;
  },
};
export default Header;
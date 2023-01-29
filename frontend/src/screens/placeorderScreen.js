import { cleanCart, getCartItems, getPayment, getShipping } from './../localStoreg'
import chekoutStep from "./../components/checkoutStep.js"
import { showLoading, hideLoading, showMessage } from '../Utils';
import { createOrder } from '../api';
const convertCartToOrder = () => {
    const orderItems = getCartItems();
    if (orderItems.length === 0) {
        document.location.hash = "/cart"
    }
    const shipping = getShipping();
    if (!shipping.address) {
        document.location.hash = "/shipping"
    }

    const payment = getPayment();
    if (!payment.paymentMethod) {
        document.location.hash = "/payment"
    }

    const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 600000 ? 0 : 25000;
    const totalPrice = itemsPrice + shippingPrice;


    return {
        orderItems,
        shipping,
        payment,
        itemsPrice,
        shippingPrice,
        totalPrice
    }
}

const placeOrder = {
    after_render: async () => {
        document
            .getElementById('placeorder-button')
            .addEventListener('click', async () => {
                const order = convertCartToOrder();
                showLoading();
                const data = await createOrder(order);
                hideLoading();
                if (data.error) {
                    showMessage(data.error);
                } else {
                    cleanCart();
                    document.location.hash = `/order/${data.order._id}`;
                }
            });
    },
    render: () => {
        const {
            orderItems,
            shipping,
            payment,
            itemsPrice,
            shippingPrice,
            totalPrice
        } = convertCartToOrder();

        return `
            <div>
            ${chekoutStep.render({ step1: true, step2: true, step3: true, step4: true })}

            <div class="order">
                <div class="order-info">
                    <div>
                        <h2>مشخصات</h2>
                        <div>
                          <span>استان:</span>${shipping.city},<span>آدرس:</span>${shipping.address},<span>کدپستی:</span>${shipping.postCode},<span>شماره تلفن:</span> ${shipping.phonNum} 
                            
                        </div>
                    </div>
                    <div>
                        <h2>پرداخت</h2>
                        <div>
                        پرداخت از : ${payment.paymentMethod}
                        </div>
                    </div>
                    <div>
                        <ul class="cart-list-container">
                            <li>
                                <h2>محصولات</h2>
                                <h3>هزینه</h3>
                            </li>
                                ${orderItems.map((item) => `
                                <li>
                                <div class="cart-image">
                                    <img src="${item.image}" alt="${item.name}" />
                                </div>
                                <div class="cart-name">
                                    <div>
                                        <a href="/#/product/${item.product}">${item.name} </a>
                                    </div>
                                    <div class="qty"> تعداد: <span>${item.qty}</span> </div>
                                </div>
                                <div class="cart-price"> <span>${item.totalcost}</span>تومان</div>
                            </li>
                            `
        ).join('\n')}
                         </ul>
                 </div>
                </div>
                <div class="order-action">
                    <ul>
                        <li>
                            <h2>مجموع قابل پرداخت</h2>
                        </li>
                        <li><div>هزینه محصولات</div><div><span>${itemsPrice}</span>تومان</div></li>
                        <li><div>هزینه ارسال</div><div><span>${shippingPrice}</span>تومان</div></li>
                        <li class="total"><div>مجموع قابل پرداخت</div><div><span>${totalPrice}</span>تومان</div></li> 
                        <li>
                    </ul>   
                    <button id="placeorder-button" class="btn-tertiary">
                     پرداخت </button>
                </div>
            </div>
        </div>
        `;
    },
};

export default placeOrder;
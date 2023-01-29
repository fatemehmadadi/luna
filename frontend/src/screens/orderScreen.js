import {
    parseRequestUrl,
} from '../Utils';
import { getOrder} from '../api';

const OrderScreen = {
    after_render: async () => {
    },
    render: async () => {
        const request = parseRequestUrl();
        const {
            shipping,
            payment,
            orderItems,
            itemsPrice,
            shippingPrice,
            totalPrice,
            isDelivered,
            isPaid,
            paidAt,
        } = await getOrder(request.id);
        return `
            <div>
            <div class="order">
                <div class="order-info">
                    <div>
                        <h2>مشخصات</h2>
                        <div>
                          <span>استان:</span>${shipping.city},<span>آدرس:</span>${shipping.address},<span>کدپستی:</span>${shipping.postCode},<span>شماره تلفن:</span> ${shipping.phonNum} 
                             ${isDelivered
                ? `<div class="success"> ارسال شده</div>`
                : `<div class="error"> در حال اماده سازی</div>`
            }
                        </div>
                    </div>
                    <div>
                        <h2>پرداخت</h2>
                        <div>
                        درگاه پرداخت: ${payment.paymentMethod}
                         ${isPaid
                ? `<div class="success"> پرداخت شده از${paidAt}</div>`
                : `<div class="error">پرداخت نشده</div>`
            }
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
        </div>
        `;
    },
};
export default OrderScreen;

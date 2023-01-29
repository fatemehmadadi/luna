export const getCartItems = () => {
    let cartItem = localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) : [];
    return cartItem
};

export const setCartItems = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const cleanCart = () => {
    localStorage.removeItem('cartItems');
};

export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = false
}) => {
    localStorage.setItem("userInfo", JSON.stringify({
        _id,
        name,
        email,
        token,
        isAdmin,
    }));
};
export const getUserInfo = () => {
    return localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {
        name: '',
        email: '',
    };
};
export const clearUser = () => {
    return localStorage.removeItem("userInfo");
};

export const getShipping = () => {
    const shipping = localStorage.getItem("shipping") ?
        JSON.parse(localStorage.getItem("shipping")) : {
            phonNum: '',
            address: '',
            city: '',
            postCode: ''
        }
    return shipping;
}

export const setShipping = ({
    phonNum = '',
    address = '',
    city = '',
    postCode = '' }) => {
    localStorage.setItem("shipping", JSON.stringify({ phonNum, address, city, postCode }));
}

export const getPayment = () => {
    const shipping = localStorage.getItem("payment") ?
        JSON.parse(localStorage.getItem("payment")) : {
            paymentMethod: '',
        }
    return shipping;
}

export const setPeyment = ({
    paymentMethod = '' }) => {
    localStorage.setItem("payment", JSON.stringify({ paymentMethod }));
}
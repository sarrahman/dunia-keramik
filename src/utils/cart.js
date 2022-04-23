const localStorageKey = "CART";

function checkStorage() {
  return typeof Storage !== "undefined";
}

export function insertData(data) {
  if (checkStorage()) {
    let cartData = [];

    if (localStorage.getItem(localStorageKey) === null) {
      cartData = [];
    } else {
      cartData = JSON.parse(localStorage.getItem(localStorageKey));
    }

    cartData.unshift(data);
    localStorage.setItem(localStorageKey, JSON.stringify(cartData));
  }
}

export function getCart() {
  if (checkStorage()) {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  } else {
    return [];
  }
}

export function deleteCart(id) {
  // eslint-disable-next-line eqeqeq
  const cartData = getCart().filter((a) => a.product._id != id);
  localStorage.setItem(localStorageKey, JSON.stringify(cartData));
}

export function updateCart(id, quantity) {
  const data = getCart().find((item) => item.product._id === id);
  data.quantity = quantity;
  // eslint-disable-next-line eqeqeq
  const cartData = getCart().filter((a) => a.product._id != id);
  cartData.unshift(data);
  localStorage.setItem(localStorageKey, JSON.stringify(cartData));
}

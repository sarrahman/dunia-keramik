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

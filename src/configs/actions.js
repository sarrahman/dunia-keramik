import api from "../utils/api";

export const getProducts = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/products`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProduct = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/product/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProductsbyKategori = (kategori) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/products/kategori/${kategori}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProductByUkuran = (ukuran) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/products/ukuran/${ukuran}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export const getProductByTekstur = (teksur) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/products/tekstur/${teksur}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export const getProductByBrand = (brand) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/products/brand/${brand}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

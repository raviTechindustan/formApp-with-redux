import { apiGet, apiPatch, apiDelete } from '../../utils';

export function AllProducts() {
  return apiGet('/products')
}
export function ProductById(id) {
  return apiGet(`/products/${id}`)
}

export function saveProductById(id, data) {
  console.log("Data are", data);
  return apiPatch(`/products/${id}`, data);
}

export function deleteProductById(id) {
  return apiDelete(`/products/${id}`);
}

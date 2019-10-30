import { apiGet } from '../../utils';

export function AllProducts() {
  return apiGet('/products')
}
export function ProductById(id) {
  return apiGet(`/products/${id}`)
}



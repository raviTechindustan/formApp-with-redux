import { apiPost } from '../../utils';

export function loginAPI(data) {
  return apiPost('/users/login', data)
}

export function SignupAPI(data) {
  return apiPost('/users/signup', data)
}


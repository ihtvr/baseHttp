import {
	post,get
} from './baseApi'
const userLoginApi = '/users/login'
export const userLogin = (params) => post(userLoginApi, params)

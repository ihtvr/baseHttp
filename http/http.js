import axios from 'axios'; // 引入axios
import QS from 'qs';


export const http = axios.create({
	timeout: 15000, // 请求超时时间
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	}
})

//请求前操作
http.interceptors.request.use(
	(config) => {		
		//判断是否登录 
		return config
	},
	(error) => {		
		return Promise.reject(error)
	}
)

//请求后操作
http.interceptors.response.use(
	response => {			
		return Promise.resolve(response)
	},
	error => {	
		return Promise.reject(error)
	}
)


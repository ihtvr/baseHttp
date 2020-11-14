import {
	http
} from './http.js'

let baseUrl = 'http://pm.fangliju.com/flj'
http.defaults.baseURL = baseUrl
export const post = (url, params) => {
	return new Promise((resolve, reject) => {
		return new Promise((resolve, reject) => {
			http.post(url, params)
				.then(res => {
					resolve(res.data);
				}).catch(error => {
					resolve(-1)
					handError(error)
				})
		});

	});
}

export const get = (url, params) => {
	return new Promise((resolve, reject) => {
		http.get(url, params)
			.then(res => {
				resolve(res.data);
			}).catch(error => {
				resolve(-1)
				handError(error)
			})
	});
}

const handError = (error) => {
	uni.hideLoading()	
	if (error && error.code) {

	} else {
		let errMsg = error.toString();
		if(errMsg.indexOf('timeout') != -1){
			uni.showToast({
				icon:'none',				
				title: '访问超时'
			})
		}else{
			let code = errMsg.substr(errMsg.indexOf('code') + 5)
			debugger
			switch (code) {
				case '404':
					break;
				case '500':
					uni.showToast({
						icon:'none',
						title: '访问服务器失败'
					})
					break;
			}
		}
		
	}
}

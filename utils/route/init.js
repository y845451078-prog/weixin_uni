import loginConfig from "@/utils/config/login.js";
export default function initApp() {
	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => { //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
		uni.addInterceptor(item, {
			invoke(e) { // 调用前拦截
				//获取用户的token
				const token = uni.getStorageSync('token');
				//获取当前页面路径（即url去掉"?"和"?"后的参数）
				const url = e.url.split('?')[0]
				//判断要打开的页面是否需要验证登录
				if (!loginConfig.whiteList.includes(url) && token == '') {
					uni.showModal({
						title: '该页面需要登录才能访问，是否去登录?',
						icon: 'none',
						success: (res) => {
							if (res.confirm) {
								uni.navigateTo({
									url: loginConfig.loginPage
								})
							} 
							// else if (res.cancel) {
							// 	console.log('用户点击取消');
							// }
						}
					})
					return false
				}
				return true
			},
			fail(err) { // 失败回调拦截 
				console.log(err);
			},
		})
	})
}
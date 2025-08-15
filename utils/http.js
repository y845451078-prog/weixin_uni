// domain - string: 域名地址
// url - string: 接口地址
// method - string: 访问方式
// data - obj: 参数
export const myRequest = (options) => {
	uni.showLoading({
		title: "加载中"
	});
	return new Promise((resolve, reject) => {
		uni.request({
			url: options.domain + options.url,
			method: options.method || 'POST',
			data: options.data || {},
			success: (res) => {
				if (res.data.errorCode) {
					return uni.showToast({
						title: "获取数据失败",
						icon: "none"
					});
				}
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title: "请求接口失败",
					icon: "none"
				});
				reject(err);
			},
			complete: () => {
				uni.hideLoading();
			}
		});
	});
};
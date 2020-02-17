// 封装校验策略方法
// 校验用户名
export function checkUsername(field, value, cb) {
	// 不能为空
	if (!value) {
		// 提示错误
		return cb(new Error('请输入用户名!'));
	}
	if (!/^\w{4,8}$/.test(value)) {
		// 提示错误
		return cb(new Error('用户名是4-8位的字母数字下划线!'));
	}
	// 没有问题
	cb();
}
// 校验密码
export function checkPassword(field, value, cb) {
	// 不能为空
	if (!value) {
		return cb(new Error('请输入密码!'));
	}
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 提示错误
		return cb(new Error('密码必须包含字母和数字!'));
	}
	// 没有问题
	cb();
}
// 重复性校验
export function checkRepeat(data, name, field, value, cb) {
	// console.log(arguments)
	// 不能为空
	if (!value) {
		// 提示错误
		return cb(new Error(`重复${name}不能为空！`));
	}
	// 比较是否一致
	if (data !== value) {
		// 提示错误
		return cb(new Error(`重复${name}与${name}不一致！`));
	}
	// 没有问题
	cb();
}
// 校验电话号码
export function checkTel(field, value, cb) {
	// 不能为空
	if (!value) {
		return cb(new Error('请输入电话号码!'));
	}
	if (!(/^1[3456789]\d{9}$/.test(value))) {
		// 提示错误
		return cb(new Error('你输入的电话号码有误，请重新输入！'));
	}
	// 没有问题
	cb();
}
const totalPrice = ({ price, discount, isInstallment, months }) => {
	let pricePerMonth = price * ((100 - discount) / 100) / months
	console.log(pricePerMonth)
	if (isInstallment) return pricePerMonth
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250
// Задание #2
// Очень не сложное, но при неверной настройки TS ругался на аргументы в стрелочной функции.
// И не понятен смысл присутствия isInstallment, но думаю на типизацию не влияет.
interface IFunkArgs {
	price: number;
	discount: number;
	isInstallment: boolean;
	months: number;
}

const totalPrice2 = ({ price, discount, isInstallment, months }: IFunkArgs): number | void => {
	let pricePerMonth = price * ((100 - discount) / 100) / months
	if (isInstallment) return pricePerMonth
}

//totalPrice2({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log("Ответ: ", totalPrice2({ price: 100000, discount: 25, isInstallment: true, months: 12 }))
// 6250
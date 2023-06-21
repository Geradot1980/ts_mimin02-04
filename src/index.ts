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


// Задание #3 Напишите и типизируйте функцию, нормализующую входящие данные
// Долго не мог понять как формировать объект, пока не подсказали, чувствуется маленький опыт с JS

interface IPost {
	id: string
	title: string
	body: string
}

interface INormalizedData {
	byId: { [key: string]: IPost }
	allIds: string[]
}

const posts: IPost[] = [
	{
		id: '62e69d5a5458aac0ed320b35',
		title: 'id labore ex et quam laborum',
		body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
	},
	{
		id: '62e69d5a5458aac0ed320b1c',
		title: 'quo vero reiciendis velit similique earum',
		body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
	},
	{
		id: '62e69d5a5458aac0ed320b32',
		title: 'odio adipisci rerum aut animi',
		body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
	},
	{
		id: '62e69d5a5458aac0ed320b39',
		title: 'alias odio sit',
		body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
	},
	{
		id: '62e69d5a5458aac0ed320b53',
		title: 'vero eaque aliquid doloribus et culpa',
		body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
	},
	{
		id: '62e69d5a5458aac0ed320b19',
		title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
		body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
	},
	{
		id: '62e69d5a5458aac0ed320b25',
		title: 'repellat consequatur praesentium vel minus molestias voluptatum',
		body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
	}
];

const normalizeData = (unnormalizedData: IPost[]): INormalizedData => {
	let byId = {}
	let allIds: string[] = []
	let key: string

	for (let index = 0; index < unnormalizedData.length; index++) {
		key = unnormalizedData[index].id
		byId = { ...byId, [key]: unnormalizedData[index] }
		allIds.push(key)
	}
	return { byId, allIds }
};
console.log(normalizeData(posts))


// Задание #4 Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id, Email: email".
// 

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IReqest {
	id: number
	email: string
}

let reqest: IReqest[] = []

const getData = (url: string): Promise<Response> => {
	return fetch(url)
}

const printData = (reqest: IReqest[]): void => {
	for (let k = 0; k < reqest.length; k++) {
		console.log(`ID: ${reqest[k].id}, Email: ${reqest[k].email}`)
	}
}

getData(COMMENTS_URL)
	.then(response => response.json())
	.then(json => printData(json))


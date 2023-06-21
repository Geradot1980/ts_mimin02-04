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
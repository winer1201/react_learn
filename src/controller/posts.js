/*
* 数据请求
*/

let data = [
	"0",
	"1",
	"2",
	"3",
	"4"
];

const getData = (id = 0) => {
	return data[id] ? data[id] : data[0];
}


export { getData };
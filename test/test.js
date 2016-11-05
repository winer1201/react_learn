const fetch = require("isomorphic-fetch");


// https://github.com/stopachka/blog/blob/master/app/actions.js
// http://bubkoo.com/2015/05/08/introduction-to-fetch/

// fetch(
// 	"http://demo.nodejs.so/svon/php/post.php",
// 	{
// 		method: 'GET',
// 	}
// ).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(1,data);
//   return data;
// }).then(function(data) {
//   console.log(2,data);
// }).catch(function(e) {
//   console.log("Oops, error");
// });


fetch("http://demo.nodejs.so/svon/php/get.php", {
  method: "GET"
}).then(function(response) {
  console.log(response.headers.get('Content-Type'))
  console.log(response.headers.get('Date'))
  console.log(response.status)
  console.log(response.statusText);
  return response;
}).then(function(response) {
  return response.json();
}).then(function(json) {
  console.log('GET json', json)
});


fetch("http://127.0.0.1:5000/post/test", {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "albumid" : "e8799ebbfc7ae5e8bd4a30abc1e6563a"
  })
}).then(function(response) {
  console.log(response.headers.get('Content-Type'))
  console.log(response.headers.get('Date'))
  console.log(response.status)
  console.log(response.statusText);
  return response;
}).then(function(response) {
  return response.json();
}).then(function(json) {
  console.log('POST json', json)
});


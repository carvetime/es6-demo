
// 正常的异步请求
// var fetch = require('node-fetch')

// var url = 'https://api.github.com/users/github';

// fetch(url).then(res => {
//     console.dir(res)
// }).catch(error => {
//     console.dir(error)
// })

// generator封装的方法
var fetch = require('node-fetch')
function* gen(url){
    var result = yield fetch(url)
    console.dir(result)
}

var g = gen('https://api.github.com/users/github')

g.next().value.then(res =>{
  g.next(res)  
}).catch(error => {
    console.dir(error)
})

// generator封装的方法

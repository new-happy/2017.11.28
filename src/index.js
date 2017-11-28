// function fun(x,y) {
//   console.log(x+y);
// }
// module.exports = fun
//module.exports 导出模块
//node模块分三类
//1.核心模块(自带的)
//2.文件模块(自己写的)
//3.第三方模块(插件)


// var b = require('./index.js')
//require 导入模块 (路径)
// b(5,6)
//第三方模块导入
//这里nodejs会去node_modules里面找到package.json文件,找到面字段里面的入口文件
// var $ = require('jquery')
// console.log($);


// console.log(a)
// let a = 10


// for (let i = 0; i < 3; i++) {
//   console.log('out',i)
//   for (let i = 0; i < 2; i++) {
//     console.log('in',i);
//   }
// }

//let es6声明变量的方式
//1.拥有块级作用域,只要在大括号内声明就会形成作用域
//2.同一作用域下不允许重复声明相同变量
//3.变量声明不提升?

//const用来声明常量,不允许被修改
// const [a, b, c, d, e] = 'hello';
// console.log(a + b + c + e); // 'hello'

//模板字符串
// var username = '打开'
// var age = 10
// var c = `my name ${username},my age ${age}`
// console.log(c);
// let [a,b]=[1,2];
// function add(a,b) {
//   console.log(a+b);
// }
// add(a,b);
// 现在
// let add = (a,b) => console.log(a+b);
//参数大于一个的时候 必须使用小括号,当只有一个参数的时候可以省略小括号

// let add = () => {
//   var a = 10
//   var b = 20
//   var c = a + b
//   return c
// }
// console.log(add())

//箭头函数注意
//1.函数体内的this对象,就是定义时所在的对象,而不是使用时的对象
//2.不可以当做构造函数
//3.不可以使用arguments对象,可以使用rest参数代替

//es6 函数参数
//参数的默认值 函数声明的时候在小括号内部直接给参数赋值相当于给了参数默认值

// function fun(x=0.y=0) {
//   // if(!x){
//   //   x = 0
//   // }
//   // if(!y){
//   //   y = 0
//   // }
//   // var a = x || 0
//   // var b = y || 0
//   return x*y
// }
// var z = fun()
// console.log(z)

//es6 函数参数的集合
// let sun = (...rest) => console.log(rest)
// sun(1,2,3,4,5,6)

//对象展开运算符
// var arr = [1,2,3]
// var arr1 = [4,5,6]
// var newArr = [...arr,...arr1]
// console.log(newArr)
//
// var obj = {
//   name:'zzt',
//   age:10
// }
// var obj1 = {
//   say:function () {
//     console.log(this.name)
//   }
// }
// var newObj = {...obj,...obj1}
// console.log(newObj);

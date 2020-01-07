// 作业 1
// 画一个边长为 10 像素的正三角形
forward(10)
left(120)
forward(10)
left(120)
forward(10)
left(120)

// 作业 2
// 画一个边长为 99 像素的正方形
var x = 90
var degree = 90
forward(x)
right(degree)
forward(x)
right(degree)
forward(x)
right(degree)
forward(x)
right(degree)
// 作业 3
// 画一个宽高分别为 168, 99 像素的矩形
// var w = 168
// var h = 99
// var degree = 90
// forward(w)
// right(degree)
// forward(h)
// right(degree)
// forward(w)
// right(degree)
// forward(h)
// right(degree)

//
//
// 作业 4
// 画一个边长为 33 像素的正三角形
// var x = 33
// var degree = 120
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
//
//
// 作业 5
// 画一个边长为 106 像素的正方形
// var x = 106
// var degree = 90
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
//
//
// 作业 6
// 画一个宽高分别为 68, 59 像素的矩形
// var w = 68
// var h = 59
// var degree = 90
// forward(w)
// right(degree)
// forward(h)
// right(degree)
// forward(w)
// right(degree)
// forward(h)
// right(degree)
//
//
// 作业 7
// 画一个边长为 79 的正五边形
// 提示, 往右旋转 72 度
// var x = 79
// var degree = 72
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
//
//
// 作业 8
// 画一个边长为 63 的正六边形
// 提示, 往右旋转 60 度
// var x = 63
// var n = 6
// var 内角 = (n - 2) * 180 / n
// var degree = 180 - 内角
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
//
//
// 作业 9
// 画一个边长为 159 的正七边形
// 提示, 往右旋转 52 度
// var x = 159
// var n = 7
// var 内角 = (n - 2) * 180 / n
// var degree = 180 - 内角
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
// forward(x)
// right(degree)
//
//
// 作业 10
// 画一个边长为 93 的正十边形
// 提示, 往右旋转 36
// var x = 33
// var n = 20
// var 内角 = (n - 2) * 180 / n
// var degree = 180 - 内角
// // 循环 10 次的方法如下
// // 首先定义一个变量用于表示循环的次数，一般我们会用 i
// var i = 0
// // while 后面的语句是条件
// // 条件如果成立，执行代码块内的内容
// // 条件如果不成立，结束循环
// while(i < n) {
//     forward(x)
//     right(degree)
//     // 特别注意，循环结束前一定要改变 i 的值
//     // 否则循环永远不会结束的
//     i = i + 1
// }

// 函数是什么？
// 函数是用来消除大段重复代码的工具
// 所有主流的编程语言都有函数这个功能

// 定义一个函数，用来画一个边长为 100 像素的正三角形
// const sjx = function() {
//     var x = 100
//     var n = 3
//     var 内角 = (n - 2) * 180 / n
//     var degree = 180 - 内角
//     var i = 0
//     while(i < n) {
//         forward(x)
//         right(degree)
//         // 特别注意，循环结束前一定要改变 i 的值
//         // 否则循环永远不会结束的
//         i = i + 1
//     }
// }


// 函数的默认参数
const polygon = function (bianchang, bianshu = 3) {
    var x = bianchang
    var n = bianshu
    var 内角 = (n - 2) * 180 / n
    var degree = 180 - 内角
    var i = 0
    while (i < n) {
        forward(x)
        right(degree)
        i = i + 1
    }
}

polygon(100)
polygon(50, 7)
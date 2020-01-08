// 第 1 课作业
//
// 这个作业的配套课程如下
// github.com/kuaibiancheng/ProjectOpenCourse
// 做作业的过程中如果遇到问题, 暂时请先走下面 2 步, 之后的课程中会教更高级的解决问题的方法
// 1, 对照上课代码和本文件内的资料
// 2, 检查是否拼写错误 漏了符号 用了中文括号/逗号等等
//


// 关于画图的资料
// ----------
// 画图的画面宽高为 600x400
// 原点在画布的中点
// 往右是 x 轴正向
// 往下是 y 轴正向
//
// 初始化的状态是箭头在原点 朝右
//
// 下面介绍一些常用的函数

// // 定义一个变量表示步长
// var step = 50
//
// // forward 表示向前走
// // 刚开始的时候朝右, 并且在坐标 (0, 0)
// forward(step)
//
// // penup 可以把笔抬起来, 这样往前走就不会画线了
// penup()
// forward(step)
//
// // pendown 后又可以画线了
// pendown()
// forward(step)
//
// // setHeading(注意大小写) 可以设置箭头的朝向, 0 就是朝右
// // 90 和 -90 的朝向, 自行摸索一下
// setHeading(0)
//
// // right 可以右转
// right(30)
// forward(step)
//
// // goto 可以直接走到某个坐标
// // 这里是走到 (100, 200) 这个坐标
// goto(100, 200)
//
// jump 可以无痕走到某个坐标
const jump = function (x, y) {
    penup()
    goto(x, y)
    pendown()
}


// ---
// 画图功能的资料结束, 下面是作业
// 作业请对比着上课的代码，用复制粘贴修改的方式来做
// ---


// 例子 1
//
// 实现函数, 用于画一个边长 100 的正方形
// // 参数 x, y 是正方形左上角坐标
// const square = function (x, y) {
//     jump(x, y)
//     // 设置朝向, 确保箭头朝向 右边
//     // 当然如果是用 goto 来画的话, 就不用关心朝向
//     setHeading(0)
//     // 循环画正方形
//     // 当然, 你可以用 goto 来画
//     // 只需要计算一下四个顶点的坐标 (这很简单)
//     var i = 0
//     while (i < 4) {
//         forward(100)
//         right(90)
//         i = i + 1
//     }
// }



// 1
// ===
// 实现函数, 用于画一个正方形, 边长由参数提供
// 参数 x, y 是正方形左上角坐标
// 参数 length 是正方行边长
// 函数声明如下
// square(x, y, length)
//
// 本题需要根据例子 1 的代码修改，步骤如下
// 1. 在例子 1 的基础上再增加一个参数 length
// 2. forward 的参数换成 length

const square = function (x, y, length) {
    jump(x, y)
    // 设置朝向, 确保箭头朝向 右边
    // 当然如果是用 goto 来画的话, 就不用关心朝向
    setHeading(0)
    // 循环画正方形
    // 当然, 你可以用 goto 来画
    // 只需要计算一下四个顶点的坐标 (这很简单)
    var i = 0
    while (i < 4) {
        forward(length)
        right(90)
        i = i + 1
    }
}



// 2
// ===
// 实现函数, 用于画一个矩形, 长宽由参数提供
// 参数 x, y 是左上角坐标
// 参数 w, h 是长宽
// 函数声明如下
// rect(x, y, w, h)
//
// 根据例子 1 的程序修改，步骤如下
// 1. 考虑矩形只重复两次(一次会画出宽和高), 所以只需要循环 2 次

const rect = function (x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i = i + 1
    }
}



// 3
// ===
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 0
// 函数声明如下
// square5()
//
// 根据资料中的循环例子, 计算每个正方形的坐标，步骤如下
// 1. 要画出 5 个正方形, 说明要循环 5 次
// 2. 计算每次循环的正方形左上角坐标 x, y
// 3. 在每次循环中画正方形, 调用作业 1 中实现的函数

const square5 = function () {
    var x = 0
    var y = 0
    var i = 0
    var length = 30
    while (i < 5) {
        square(x, y, length)
        i = i + 1
        x = x + length
    }

}



// 4
// ===
// 画一排正方形, 一共 5 个
// 从 0 0 点开始, 边长为 30, 正方形之间间隔为 10 像素
// 函数声明如下
// square5_10()
//
// 步骤如下
// 作业 4 和作业 3 的不同之处在于每个正方形的左上角坐标不同
// 因此在计算出每个左上角的坐标之后，参考作业 3 的提示即可完成

const square5_10 = function () {
    var x = 0
    var y = 0
    var i = 0
    var length = 30
    var space = 10
    while (i < 5) {
        square(x, y, length)
        i = i + 1
        x = x + length + space
    }
}



// 5
// ===
// 实现函数, 画一排正方形, 有如下参数
// x, y 是第一个正方形左上角坐标
// n 是正方形的个数
// space 是两个正方形之间的间距
// len 是正方形的边长
// square_line(x, y, n, space, len)
//
// 步骤如下:
// 作业 4 中画 5 个正方形, 循环 5 次
// 作业 5 中画 n 个正方形, 循环 n 次
// 同时两个正方形的间距从 10 换成了 space

const square_line = function (x, y, n, space, len) {
    var i = 0
    while (i < n) {
        square(x, y, len)
        i = i + 1
        x = x + len + space
    }
}
// square_line(0, 0, 2, 10, 10)



// 6
// ===
// 实现函数, 用上题的函数来画一个正方形方阵, 参数如下
// x, y 是第一个正方形左上角坐标
// space 是两个正方形之间的间距
// len 是正方形的边长
// n 是横向正方形的个数
// m 是纵向正方形的个数
// square_square(x, y, space, len, n, m)
//
// 步骤如下
// m 是纵向正方形的个数, 所以需要循环 m 次,
// 每次循环画一排正方形, 这是作业 5 的要求
// 所以每次循环调用作业 5 的 square_line 函数就行


const square_square = function (x, y, space, len, n, m) {
    var i = 0
    while (i < m) {
        square_line(x, y, n, space, len)
        y = y + space + len
        i = i + 1
    }
}
// square_square(0, 0, 10, 10, 2, 2)



// 7
// ===
// 实现函数, 画一排矩形, 有如下参数
// x, y 是第一个矩形左上角坐标
// w, h 是矩形长宽
// n 是矩形的个数
// space 是两个矩形之间的间距
// rect_line(x, y, w, h, n, space)
//
// 步骤如下
// 作业 7 和作业 5 的区别是作业 7 要求画矩形, 作业 5 要求画正方形
// 也就是在作业 7 的每次循环中画一个矩形即可


const rect_line = function (x, y, w, h, n, space) {
    var i = 0
    while (i < n) {
        rect(x, y, w, h)
        i = i + 1
        x = x + space + w
    }
}
// rect_line(0, 0, 10, 20, 3, 5)


// 8
// ===
// 实现函数, 画一个矩形方阵, 参数如下
// x, y 是第一个矩形左上角坐标
// space 是两个矩形之间的间距(横向和纵向)
// w, h 是矩形的长宽
// n 是横向矩形的个数
// m 是纵向矩形的个数
// rect_square(x, y, space, w, h, n, m)
//
// 步骤如下
// 参考作业 6, 共 m 次循环
// 在每次循环中, 画一排矩形, 也就是调用作业 7 中实现的函数


const rect_square = function (x, y, space, w, h, n, m) {
    var i = 0
    while (i < m) {
        rect_line(x, y, w, h, n, space)
        i = i + 1
        y = y + space + h
    }
}
// rect_square(0, 0, 10, 10, 20, 3, 3)



// 9
// ===
// 实现函数, 画一个正多边形, 参数如下
// x y 是起点, 设起点为多边形的顶部边的左顶点
// n 是多边形的边数
// length 是边长
// polygon(x, y, n, length)
//
// 步骤如下
// 正多边形和正方形的区别是前者循环 n 次，后者循环 4 次
// 其他都可以直接参考作业 1

const polygon = function (x, y, n, length) {
    jump(x, y)
    setHeading(0)
    var i = 0
    var degree = 360 / n
    while (i < n) {
        forward(length)
        right(degree)
        i = i + 1
    }
}
// polygon(0, 0, 10, 10)
//画一排多边形
const polygon_line = function (x, y, n, length, num, space) {
    var i = 0
    while (i < num) {
        polygon(x, y, n, length)
        i = i + 1
        x = x + space + length
    }
}
// polygon_line(0, 0, 5, 10, 2, 10)
//画多边形矩阵
const polygon_square = function (x, y, n, length, space, numX, numY) {
    var i = 0
    while (i < numY) {
        polygon_line(x, y, n, length, numX, space)
        y = y + space + length
        i = i + 1
    }
}
polygon_square(0, 0, 5, 10, 10, 3, 3)
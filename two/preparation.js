// 数据类型
// 调试代码(解决语法错误和逻辑错误)
// 选择结构与比较、逻辑运算
// 函数返回值

// 数据类型
// 程序中的数据不仅仅只有数字一种
// 还有很多其他类型的数据
// 还可以把它们显示出来

// 下面的例子中 x 是一个数字类型的变量
// y 是一个浮点型变量
// 整型就是整数, 浮点型就是小数
const demoType = function () {
    var x = 10
    var y = 10.1
    var a = 12.0
    var b = 0.21

    // name 是一个字符串类型的变量
    // 双引号或者单引号包起来的字符就是字符串
    // 双引号和单引号
    var name = 'gua'
    var gender = "male"

    // 下面这种混合使用单双引号是错误的
    // var a = 'b+c"

    // 可以使用一个特殊的函数 log 来显示变量的值
    // 这个函数可以接受任意多的参数
    log('log x y name', x, y, name)
    // 会在终端显示 log x y name 10 10.1 gua
    // 查看终端显示的值的方法在下方

    // 在代码中用 log 函数输出的内容会在终端显示
    // 主要用于调试代码（上课会讲）
}

demoType()


// 选择控制
//
// if 可以根据情况选择性执行某些语句
// 例如下方代码
//
const demoIf = function () {
    // 定义一个变量 grade 代表年级
    var grade = 3
    // 如果 grade 小于 7
    if (grade < 7) {
        // 这句 log 只在 grade 小于 7 这个条件满足的情况下会被执行
        log('小学生')
    }

    // 选择控制有多种不同的用法
    // 只有 if
    if (1 > 2) {
        log('条件成立')
    }

    // if 带 else
    // if else 必定会执行一个语句
    if (1 > 2) {
        log('条件成立')
    } else {
        log('条件不成立')
    }

    // 多个 if else
    var grade1 = 8
    if (grade1 < 7) {
        log('小学生')
    } else if (grade1 < 10) {
        log('初中生')
    } else {
        log('高中生')
    }

    // 例子
    // 求绝对值
    var n1 = -1
    if (n1 < 0) {
        n1 = -n1
    }

    // 判断奇偶
    // % 是求模运算符(取余数)
    var n2 = 1
    if (n2 % 2 == 0) {
        log('偶数')
    } else {
        log('奇数')
    }
}

demoIf()


// 比较运算和逻辑操作
//
const demoCondition = function () {
    // if 判断的条件(括号里的表达式)其实是一个值, 这种值叫 布尔值(Boolean)
    // 这种值只有两种结果, 一个是真, 一个是假
    // 分别是 true 和 false
    //
    // 1 > 2 的结果实际上是一个值, false
    // if 是根据这个值来决定执行的语句的
    //
    // 一共有 6 个常用比较运算
    // 分别是
    // 相等, 不等, 小于, 大于, 小于等于, 大于等于
    // ==
    // !=
    // <
    // >
    // <=
    // >=

    // 例子
    // 1 == 1
    // 1 == 2
    // 1 != 1
    // 1 != 2
    // 1 < 2
    // 1 > 2
    // 1 <= 1
    // 1 >= 1

    // 除了比较运算, 还有三种逻辑操作
    // 分别是 与, 或, 非，用如下的方式表示
    // and
    // or
    // not
    //
    // 用到的地方很广, 比如登录网站的时候, 服务器做如下判断
    // if (用户名存在 and 密码验证成功) {
    //     登录成功
    // } else {
    //     登录失败
    // }


    // 注意
    // 比较运算和逻辑操作的结果是 true 或 false

    // 例子
    // 1 == 1 and 2 == 2    // true
    // 1 == 1 and 1 == 2    // false
    // 1 == 1 or 1 == 2     // true
    // not (1 == 1)         // 加个括号方便看清楚逻辑

    // 可以加括号来让代码更直观一点
    // ((1 == 1) and (2 == 2)) or (1 == 2)
}


// 函数返回值
//
// 函数不仅可以合并操作重复性的代码
// 还可以通过计算得到一个结果, 这个结果我们称之为返回值
// 返回值的意思是函数调用的结果是一个值, 可以被赋值给变量
// 具体用法见下方的例子

// 例
// 定义一个函数 add
// 接受 a b 两个参数
const add = function (a, b) {
    // 用 return 语句来得到一个返回值
    // 函数执行到 return 语句的时候就结束了
    return a + b
}

// 用法
log('add 函数的返回值', add(1, 2))
var number = add(2, 3)
log('add 函数的返回值 number', number)

// 注意看上面的语句, add(2, 3) 被当做一个值赋值给了变量 number
// 也就是说这个函数调用是一个值, 这个值就是函数的返回值


// 例如, 使用函数来求绝对值
const abs = function (n) {
    if (n < 0) {
        n = -n
    }
    return n
}

log('abs ', abs(0))
log('abs ', abs(-8))
log('abs ', abs(3))

// 函数执行遇到 return 就结束
const minus = function (a, b) {
    log('minus 函数运行开始')
    return a - b
    log('这一句是不会被执行的, 因为 return 的时候函数就结束了')
    // 请注意，return 会终止循环这个概念非常重要
    // 请一定一定注意这一点
    // 因为根据经验会有许多人在作业中因为这个问题翻车
}

// 例子
// 使用函数检查一个数字是否是奇数(奇数对 2 取余数不等于 0)
const isOdd = function (n) {
    // 取余数的操作符是 %
    if (n % 2 != 0) {
        return true
    } else {
        return false
    }
    // 实际情况中，上面的代码会写成下面的形式，直接返回布尔值
    // return n % 2 != 0
}

log('isOdd', isOdd(1))
log('isOdd', isOdd(2))
log('isOdd', isOdd(3))
log('isOdd', isOdd(4))

// 练习, 实现 isEven 函数, 偶数返回 true, 奇数返回 false


// 返回两个参数中较小的一个
const min = function (a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}


log('min ', min(1, 2))
log('min ', min(3, 2))

// 练习, 实现 max 函数, 接收两个参数, 返回较大的那一个值
const max = function (a, b) {
    if (a < b) {
        return b
    } else {
        return a
    }
}
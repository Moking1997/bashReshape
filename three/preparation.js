// 预习 3 的代码, 需要安装 2.5.4 版本的开发软件
// 安装方法见下面的链接（现在已经支持运行程序一键安装）
// https://github.com/kuaibiancheng/ProjectOpenCourse/wiki/安装配置方法

// array 可以干嘛？
// array 可以存储很多元素, 每个元素的值、类型都可以不同
// 具体看下面的例子

var demoArray = function () {
    // array（数组）常用操作
    // 创建数组
    // 使用 [] 符号, 每个元素用逗号分隔
    var a = [1, 3, 4, 5]
    // 现在 a 是一个 array, 拥有 4 个元素


    // 可以用 .length() 的方式得到 array 的长度
    log('求 array 长度', a.length())
    // 使用 .length() 可以求出数组的长度（数组中元素的个数）
    // 值可以用变量接住
    var length = a.length()
    log('a.length() ', length)

    // 访问元素
    // 对于数组中的每个元素, 可以通过下标访问
    // 下标就是元素在数组中的序号, 从 0 开始
    // 下标访问语法是 [] 中括号
    log('用下标访问 array 中的元素')
    log('a[0]', a[0])
    log('a[1]', a[1])
    log('a[2]', a[2])
    log('a[3]', a[3])
    // 因为一共只有 4 个元素, 所以访问不存在的下标会出错
    // log(a[4])

    // 手动访问元素当然是低效的
    // 可以用循环来访问元素, 这个过程叫 遍历
    log('循环访问 array 所有元素')
    var i = 0
    while (i < a.length()) {
        log('a[i]', a[i])
        i = i + 1
    }
}

demoArray()


// 向已经存在的 array 中添加新元素
// 可以用数组的 push 函数往列表末尾插入一个元素
// 并且, 这个新元素可以是任意类型, 这里是一个字符串
// 请注意, 这是一个全新的概念
// 数组类型的变量可以用 .函数() 的方式来进行操作
var demoArrayAdd = function () {
    var a = [1, 3, 4, 5]
    a.add('新元素')
    log('a push ', a)
    // [1, 3, 4, 5, '新元素']

    a.add(0)
    log('a.add(0)', a)
    // [1, 3, 4, 5, '新元素', 0]

    // 多添加几个元素
    a.add(12)
    a.add(34)
    a.add(56)
    log('a.add 12 34 56', a)
}

demoArrayAdd()


// 小练习, 给定一个只包含数字的 array
// 1. 得到列表中最小的元素
// 2. 得到列表中所有数字的和
// 3. 得到列表中所有数字的平均数
//  array.length() 可以得到 array 长度（也就是元素个数）

var demoMin = function () {
    // 这是一段获取数组中最小元素的代码
    var a1 = [3, 9, 2, 0, 8]
    var min = a1[0]
    var i = 0
    while (i < a1.length()) {
        var n = a1[i]
        if (n < min) {
            min = n
        }
        i += 1
    }
    log('min', min)
}

demoMin()

var demoMax = function () {
    // 这是一段获取数组中最小元素的代码
    var a1 = [3, 9, 2, 0, 8]
    var max = a1[0]
    var i = 0
    while (i < a1.length()) {
        var n = a1[i]
        if (n > max) {

            max = n
        }
        i += 1
    }
    log('max', max)
}

demoMax()






// 字符串
// 字符串的操作
// 字符串可以判断相等、可以相加
// 例子
log('判断相等或者包含')
log('good' == 'good')
log('good' == 'bad')
log('good' != 'bad')

// 拼接得到一个新字符串
log('very' + 'good')
log('very ' + 'good')

// 得到一个你想要的字符串有多种方式
// 加号的方式固然能用, 但是现在有现代的方式
// 见下方的例子, 字符串有一个 .format 函数可以替换其中的 {}
var name = 'gua'
var hello = '{}, 你好'.format(name)
log('format dmeo ', name)
// 简单说来, 就是 {} 会被变量 name 替换形成新字符串


// 字符串相当于一个 array, 可以用下标访问
// 看例子, 看结果
// 下面字符串 s 的长度是 7, 但是下标是从 0 开始的, 所以最大下标是 6
var s = 'iamgood'
log('s[0]', s[0])
log('s[1]', s[1])
log('s[2]', s[2])
log('s[6]', s[6])
//
// 当然也就可以和 array 一样用循环遍历了
// 自己试试


// 字符串不能使用下标来赋值
// 只能拼接起来生成一个新的字符串
var name1 = 'gua'
// name1[0] 是 'g'
// 假如你进行如下操作 name1[0] = 'A'
// 会产生一个错误, 因为字符串不能这样操作


// 字符串可以用 .cut 函数来获取子字符串
// 当然 array 也可以这样切片
// 语法如下
// s.cut(开始下标, 结束下标)
log('cut 0 3', s.cut(0, 3))  // 'iam'
log('cut 1 3', s.cut(1, 3))  // 'am'

// 可以省略结束下标参数, 表示取到底
log('cut 0  ', s.cut(3))     // 'good'

// cut 操作不会影响原来的字符串
log('cut 0 s ', s)
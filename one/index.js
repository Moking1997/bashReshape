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
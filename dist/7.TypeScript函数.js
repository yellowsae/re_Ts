(function () {
    // 7.1 TypeScript 函数与 JavaScript 函数的区别
    /**
     * TypeScript JavaScript
        含有类型    ⽆类型
        箭头函数    箭头函数（ES2015）
        函数类型    ⽆函数类型
        必填和可选参数    所有参数都是可选的
        默认参数    默认参数
        剩余参数    剩余参数
        函数重载    ⽆函数重载
     */
    // 7.2 箭头函数
    var myBooks = ['test1', 'test2', 'test3'];
    myBooks.forEach(function () { return console.log('reading'); });
    myBooks.forEach(function (title) { return console.log(title); });
    myBooks.forEach(function (title, idx, arr) {
        console.log(idx + '-' + title);
    });
    // 未使⽤箭头函数
    // function Book() {
    //   let self = this;
    //   self.publishDate = 2016;
    //   setInterval(function () {
    //     console.log(self.publishDate);
    //   }, 1000);
    // }
    // 使⽤箭头函数
    function Book() {
        var _this = this;
        this.publishDate = 2016;
        setInterval(function () {
            console.log(_this.publishDate);
        }, 1000);
    }
    // 7.3 参数类型和返回类型
    function createUserId(name, id) {
        return name + id;
    }
    // 7.4 函数类型
    var IdGenerator; // 设置类型
    IdGenerator = function (chars, nums) {
        return chars + nums;
    };
    // 7.5 可选参数及默认参数
    // 可选参数  age?: number   加上 ？ 号表示可选
    function createUserIdB(name, id, age) {
        return name + id;
    }
    // 默认参数 , name = 'Yellowsea'
    function createUserIdC(name, id, age) {
        if (name === void 0) { name = 'Yellowsea'; }
        return name + id;
    }
    // 在声明函数时，可以通过 ? 号来定义可选参数，⽐如 age?: number 这种形式。在实际使⽤时，需要
    // 注意的是可选参数要放在普通参数的后⾯，不然会导致编译错误。
    // 7.6 剩余参数
    function push(array) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        items.forEach(function (item) { return array.push(item); });
    }
    var a = [];
    push(a, 1, 2, 3);
    console.log(a);
    function add(a, b) {
        // type Combinable = string | number;
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    // 在以上代码中，我们为 add 函数提供了多个函数类型定义，从⽽实现函数的重载。在 TypeScript 中除
    // 了可以重载普通函数之外，我们还可以重载类中的成员⽅法。
    /**
     * ⽅法重载是指在同⼀个类中⽅法同名，参数不同（参数类型不同、参数个数不同或参数个数相同时参数
      的先后顺序不同），调⽤时根据实参的形式，选择与它匹配的⽅法执⾏操作的⼀种技术。所以类中成员
      ⽅法满⾜重载的条件是：在同⼀个类中，⽅法名相同且参数列表不同。下⾯我们来举⼀个成员⽅法重载
      的例⼦：
     */
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.add = function (a, b) {
            if (typeof a === 'string' || typeof b === 'string') {
                return a.toString() + b.toString();
            }
            return a + b;
        };
        return Calculator;
    }());
    var calculator = new Calculator();
    var result = calculator.add('Semlinker', ' Kakuqo');
    console.log(result);
})();

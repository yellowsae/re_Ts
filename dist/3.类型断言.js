(function () {
    // TS 的类型断言
    // 类型断言简单来说就是，告诉编译器自己确定的某个变量的类型
    // 1. 尖括号 <> 语法
    var someValue = 'this is a someValue';
    var someLength = someValue.length;
    console.log(someLength);
    // 2. as 语法
    var someValueB = 'this is someValue';
    var someLengthB = someValue.length;
    // 3. ⾮空断⾔
    /**
     * 在上下⽂中当类型检查器⽆法断定类型时，⼀个新的后缀表达式操作符 ! 可以⽤于断⾔操作对象是⾮
     * null 和⾮ undefined 类型。具体⽽⾔，x! 将从 x 值域中排除 null 和 undefined 。
     */
    // 3.1 忽略 undefined 和 null 类型
    function myFunc(maybeString) {
        var onlyString = maybeString;
    }
})();

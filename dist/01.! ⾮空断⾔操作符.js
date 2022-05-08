(function () {
    // ! ⾮空断⾔操作符
    /**
     * 在上下⽂中当类型检查器⽆法断定类型时，⼀个新的后缀表达式操作符 ! 可以⽤于断⾔操作对象是⾮
     * null 和⾮ undefined 类型。具体⽽⾔，x! 将从 x 值域中排除 null 和 undefined 。
     */
    //  1.1 忽略 undefined 和 null 类型
    function myFunc(maybeString) {
        // const onlyString: string = maybeString  // Error， 因为 maybeString 可能时null | undefined 类型
        var ignoreUndefinedAndNull = maybeString; // Okay
    }
    function myFuncB(numGenerator) {
        // const num1 = numGenerator();  // Error  numGenerator() 对象可能未定义
        var num2 = numGenerator(); // Ok 
    }
    //   因为 ! ⾮空断⾔操作符会从编译⽣成的 JavaScript 代码中移除，所以在实际使⽤的过程中，要特别注意
    // 比如
    var a = undefined;
    var b = a; // 能够赋值
    console.log(b); // undefined
})();

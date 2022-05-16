(function () {
    // re_泛型
    // 1. 认识泛型
    function identity(value) {
        return value;
    }
    identity(123);
    // <T> 我们可以把他当做一个占位符，其中 T 代表的是类型变量，当调用函数的时候再传入对应的类型。
    /**
     * 为什么是 T ? 难道不能是其他的字母或者单词吗？
     * 当然可以 可以使任意单词或者字母，只要语义化清晰即可。建议首字母大写。当然 T 并不是毫无道理。
     *
     *  T ： 代表 Type 在定义泛型时通常用作第一个类型变量名称.
     *  K ： 表示对象中的 key 类型。
     *  V ： 表示对象中的 value 类型。
     *  E ： 表示 Element 元素类型。
     */
    //  当然也可以定义多个泛型参数。
    function identityB(value, message) {
        console.log(message);
        return value;
    }
    identityB(1, 'message'); // 这里number 对应T,  string对应message
    // 2. 泛型默认类型
    // 当使用泛型时可以给其指定默认类型，这样当调用时没有指定类型就会使用默认类型。
    function identityC(value, message) {
        console.log(message);
        return value;
    }
    identityC('123', 123); // 函数调用没有指定泛型
    identityC(123, '123'); // 指定泛型
    // 使用泛型
    // 
    var identityA = function (value, message) {
        console.log(message);
        return value;
    };
    var identityTypeB = function (value, message) {
        console.log(message);
        return value;
    };
    var user = {
        name: 'Yelllowsea',
        age: 123
    };
    var userA = {
        name: "Yelllowsea",
        eat: function (value) {
            return value;
        }
    };
    console.log(userA.eat('xxx'));
    var personA = {
        name: "Yelllowsea",
        eat: function (value) {
            // 此时会碰到问题，value失去了类型提示。但是又不能指定类型
            return value;
        }
    };
    // 调用
    console.log(personA.eat(123));
    // 方式一
    var personB = function (value) {
        // 此时会碰到问题，value失去了类型提示。但是又不能指定类型
        return value;
    };
    personB('Yellowsea');
    var userB = function (value) {
        return value;
    };
    userB('Yellowsea');
})();

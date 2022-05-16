(function () {
    // 1. 泛型类
    var ArrayList = /** @class */ (function () {
        function ArrayList() {
            this.list = []; // 空数组 
        }
        ArrayList.prototype.add = function (value) {
            this.list.push(value);
            return this.list.length;
        };
        ArrayList.prototype.del = function (index) {
            this.list.splice(index, 1);
        };
        ArrayList.prototype.set = function (index, value) {
            this.list[index] = value;
        };
        ArrayList.prototype.get = function (index) {
            return this.list[index];
        };
        return ArrayList;
    }());
    var list = new ArrayList();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add(3);
    list.set(0, 1123);
    list.del(0);
    console.log(list.get(0));
    console.log(list);
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    // function createInstanceFactory(instance: IConstructor) {
    //   return new instance()  // 泛型一个类
    // }
    // const instance = createInstanceFactory(User)  // 把鼠标放到 instance 上面发现是 void 类型。很明显不合理。
    // 注意： 当在函数参数中书写类类型的时候需要 { new (): T } 写法。
    function createInstanceFactory(instance) {
        return new instance();
    }
    var instance = createInstanceFactory(User);
})();

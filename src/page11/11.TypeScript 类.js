var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
(function () {
    // 11.1   类的属性与方法
    // 在⾯向对象语⾔中，类是⼀种⾯向对象计算机编程语⾔的构造，是创建对象的蓝图，描述了所创建的对
    // 象共同的属性和⽅法。
    var _Person_name;
    // TS 定义类
    var Greeter = /** @class */ (function () {
        // 构造函数 
        function Greeter(message) {
            this.greeting = message;
        }
        // 静态方法
        Greeter.getClassName = function () {
            return "Class name is Greeter";
        };
        // 成员方法
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        // 静态属性
        Greeter.cname = 'Greeter';
        return Greeter;
    }());
    // 实例化
    var greeter = new Greeter("world");
    // console.log(greeter.getClassName());  // Error， 访问不了静态方法
    console.log(greeter.greet());
    // console.log(greeter.cname);  // 访问不了静态属性
    console.log(greeter.greeting);
    // 11.2 ECMAScript 私有字段
    var Person = /** @class */ (function () {
        function Person(name) {
            // 私有属性的定义， 在前面加上 # 
            _Person_name.set(this, void 0); // 私有字段不能使用 访问修饰符  例如： public private 等关键字
            __classPrivateFieldSet(this, _Person_name, name, "f");
        }
        // 私有属性自能在当前类中能够访问到， 实例或子类都不能访问
        Person.prototype.greet = function () {
            console.log("Hello, my name is ".concat(__classPrivateFieldGet(this, _Person_name, "f"), "!"));
        };
        return Person;
    }());
    _Person_name = new WeakMap();
    var semlinker = new Person("Semlinker");
    // semlinker.#name   // 不能访问
    semlinker.greet(); // 内部方法能够访问到私有属性
    /**
     * 与常规属性（甚⾄使⽤ private 修饰符声明的属性）不同，私有字段要牢记以下规则：
      私有字段以 # 字符开头，有时我们称之为私有名称；
      每个私有字段名称都唯⼀地限定于其包含的类；
      不能在私有字段上使⽤ TypeScript 可访问性修饰符（如 public 或 private）；
      私有字段不能在包含的类之外访问，甚⾄不能被检测到。
     */
    // 11.3 访问器
    // 在 TypeScript 中，我们可以通过 getter 和 setter ⽅法来实现数据的封装和有效性校验，防⽌出现数据异常
    var passcode = "Hello TypeScript";
    var Employee = /** @class */ (function () {
        function Employee(_fullName) {
            this._fullName = _fullName;
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            // 访问器 getter 和 setter 
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == 'Hello TypeScript') {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: false,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee(passcode);
    console.log(employee.fullName); // 读取
    employee.fullName = 'NewIndex'; // 修改 
    console.log(employee);
    // 11.4 类的继承
    /**
     * 继承（Inheritance）是⼀种联结类与类的层次模型。指的是⼀个类（称为⼦类、⼦接⼝）继承另外的⼀
      个类（称为⽗类、⽗接⼝）的功能，并可以增加它⾃⼰的新功能的能⼒，继承是类与类或者接⼝与接⼝
      之间最常⻅的关系。
     */
    //在 TS中  使用 extends 关键字来实现继承
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this.name = theName;
        }
        // 方法
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
        };
        return Animal;
    }());
    // Snake 继承了 Animal 类
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this; // 调⽤⽗类的构造函数  -> super()  方法
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters); // 调用父类的 move() 方法 distanceInMeters = 5 参数
        };
        return Snake;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    sam.move();
    // 11.5 抽象类
    // 使⽤ abstract 关键字声明的类，我们称之为抽象类
    // 抽象类不能被实例化，因为它⾥⾯包含⼀个或多个抽象⽅法。
    // 抽象类
    var PersonB = /** @class */ (function () {
        function PersonB(name) {
            this.name = name;
        }
        return PersonB;
    }());
    // let p = new PersonB();    // Error ， 抽象类不能被实例化
    // 抽象类不能被直接实例化，我们只能实例化实现了所有抽象⽅法的⼦类。具体如下所示：
    var Developer = /** @class */ (function (_super) {
        __extends(Developer, _super);
        function Developer(name) {
            return _super.call(this, name) || this;
        }
        // 子类重写父类的抽象方法， 必须要写， 不然会报错
        Developer.prototype.say = function (words) {
            console.log("".concat(this.name, " says ").concat(words));
        };
        return Developer;
    }(PersonB));
    var p2 = new Developer('YellowSea');
    p2.say('test');
    // 11.6 类⽅法重载
    // 和函数重载一样，类方法也支持重载
    var ProductService = /** @class */ (function () {
        function ProductService() {
        }
        ProductService.prototype.getProducts = function (id) {
            if (typeof id === 'number') {
                console.log("\u83B7\u53D6id\u4E3A ".concat(id, " \u7684\u4EA7\u54C1\u4FE1\u606F"));
            }
            else {
                console.log("\u83B7\u53D6\u6240\u6709\u7684\u4EA7\u54C1\u4FE1\u606F");
            }
        };
        return ProductService;
    }());
    var productService = new ProductService();
    productService.getProducts(666); // 获取id为 666 的产品信息
    productService.getProducts(); // 获取所有的产品信息
})();

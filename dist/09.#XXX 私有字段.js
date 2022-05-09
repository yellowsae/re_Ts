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
    var _Person_name;
    // #XXX 私有字段
    var Person = /** @class */ (function () {
        function Person(name) {
            _Person_name.set(this, void 0);
            __classPrivateFieldSet(this, _Person_name, name, "f");
        }
        Person.prototype.green = function () {
            console.log("Hello, my name is ".concat(__classPrivateFieldGet(this, _Person_name, "f"), "!"));
        };
        return Person;
    }());
    _Person_name = new WeakMap();
    var semlinker = new Person("Semlinker");
    // semlinker.#name;   不能访问 name 属性
    semlinker.green(); // 不能访问到 #name
    /**
     * #xxx 私有字段 与常规属性（甚⾄使⽤ private 修饰符声明的属性）不同，私有字段要牢记以下规则：
     * 私有字段以 # 字符开头，有时我们称之为私有名称；
      每个私有字段名称都唯⼀地限定于其包含的类；
      不能在私有字段上使⽤ TypeScript 可访问性修饰符（如 public 或 private）；
      私有字段不能在包含的类之外访问，甚⾄不能被检测到
     */
});

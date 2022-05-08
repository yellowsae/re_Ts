(function () {
    // ?. 运算符
    // ?.  可选链（Optional Chaining）
    // 有了可选链后，我们编写代码时如果遇到 null 或 undefined 就可以⽴即停⽌某些表达式的运⾏。
    // 可选链的核⼼是新的 ?. 运算符
    /**
      obj?.prop
      obj?.[expr]
      arr?.[index]
      func?.(args)
     */
    var a = {
        b: true
    };
    var val = a === null || a === void 0 ? void 0 : a.b;
})();

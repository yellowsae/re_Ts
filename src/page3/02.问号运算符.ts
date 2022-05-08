(() => {
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
  const a = {
    b: true,
  }
  const val = a?.b;
  // var val = a === null || a === void 0 ? void 0 : a.b;

  // 上述的代码会⾃动检查对象 a 是否为 null 或 undefined ，如果是的话就⽴即返回 undefined ，这样就可以⽴即停⽌某些表达式的运⾏

  if (a && a.b) {
    // code 
  }

  if (a?.b) {
    // code 
  }

  // 2.1 可选元素访问

  function tryGetArrayElement<T>(arr?: T[], index: number = 0) {
    return arr?.[index]
  }

  /**
   * 编译后的ES5的代码
   * "use strict";
    function tryGetArrayElement(arr, index) {
    if (index === void 0) { index = 0; }
    return arr === null || arr === void 0 ? void 0 : arr[index];
    }
   */
  const res = tryGetArrayElement<number>([1, 2, 3, 4], 2)


  // 2.2 可选链与函数调⽤
  

})()

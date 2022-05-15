(() => {
  // 内置关键字以及高级类型
  // 泛型几乎存在于 TS 的每一个角落，加上各种特殊的加持，从这里开始慢慢的难理解了

  // 1. typeof 关键字 
  // typeof 不仅可以用来判断类型，也可以推导出类型。注意： 千万不要按照 JS 中的 typeof 去理解。

  // 没有加 上类型
  class User { }
  const obj = { name: 'zhangsan', age: 24 };
  const str = '';
  const num = 0;
  const bool = true;
  const n = null;
  // 注意不要想着简写 type strType = typeof '';  // Error 语法错误。;  TS 不能这样写
  //  type test =  typeof "test"; 

  type nType = typeof n;  // null
  type UserType = typeof User // 构造函数类型。
  type objType = typeof obj; // 对象 必须具有  { name: string, age: number }
  type strType = typeof str; //空字符串 字面量类型
  type numType = typeof num; //  0 字面量类型
  type boolType = typeof bool;  // true 字面量类型

  // const a: boolType = false;  // Error  boolType 不是 boolean 类型， 而是 为 true
  const a: boolType = true;

  const test: string = 'test';
  type testType = typeof test;  // 推断出 test 是 string 类型
  const b: testType = 'newIndexTest';  // testType 为 string 类型


  // 总： typeof 在TS中用来推断 xx 是什么类型；
  //  变量没有写有类型时： typeof 推断出的 对应的值的 数据； 必须对应了值
  // 变量写有类型时： typeof 推断出相应的类型



  // 2. 关键字 (keyof) 索引类型查询操作符

})()  

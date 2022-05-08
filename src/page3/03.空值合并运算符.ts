(() => {
  // ?? 空值合并运算符

  // 空值合并运算符 ??

  // 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。

  const foo = null ?? 'default string';
  console.log(foo);  // default string

  const baz = 0 ?? 2;
  console.log(baz); // 0 , 表明确定   ??的左边确定是  null 或 undefined 时返回右边



  // 3.1 短路
  function A() { console.log('A was called'); return undefined; }
  function B() { console.log('B was called'); return false; }
  function C() { console.log('C was called'); return "foo"; }

  console.log(A() ?? C());  //  undefined ?? "foo"  -> 'foo'
  console.log(B() ?? C()); // false


  // 3.2 ??不能与 && 或 || 操作符共⽤
  // 若空值合并运算符 ?? 直接与 AND（&&）和 OR（||）操作符组合使⽤ ?? 是不⾏的。

  // null || undefined ?? 'foo' // 出错
  // true && undefined ?? "foo"; // 出错


  // 但当使⽤括号来显式表明优先级时是可⾏的，⽐如：
  (null || undefined) ?? "foo";  // OK


  // 3.3  ??与可选链操作符 ?. 的关系
  interface Customer {
    name: string;
    city?: string;
  }

  let customer: Customer = { 
    name: 'Yellowsea'
  }

  let customerCity = customer?.city ?? 'Unknown city'
  console.log(customerCity)

})()

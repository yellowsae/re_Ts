(() => {
  // _ 数字分隔符
  // 把⼀个下划线作为它们之间的分隔符来分组数字


  const inhabitantsOfMunich = 1_464_301;
  const distanceEarthSunInKm = 149_600_000;
  const bytes = 0b1111_10101011_11110000_00001101;
  console.log(bytes) //  转为十进制
  /** 
   * 编译后的ES5 代码
   * "use strict";
    var inhabitantsOfMunich = 1464301;
    var distanceEarthSunInKm = 149600000;
    var fileSystemPermission = 504;
    var bytes = 262926349;
 */

  // 7.1 使⽤限制

  // _ 不能用在 浮点数
  // 3_.14  // Error
  // 3._141592 // Error

  // 不能使用在 自然数 e
  // 1_e10;
  // 1e_10

  // _ 不能放在开头 或 结尾
  // _1024;
  // 1024_

  // 不能 _ 连用
  // 123__123; 



  // 7.2 解析分隔符
  // 解析数字的函数是不⽀持分隔符
  // Number()
  // parseInt()
  // parseFloat()

})()

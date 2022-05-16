(() => {
  // Pick

  // 从一个对象中取出一些属性构造一个新的对象。


  /**
   * From T, pick a set of properties whose keys are in the union K
   * 从 T 中选择一组属性，其键在并集 K 中
   */

  type Pick<T, K extends keyof T> = {
    [P in K]: T[P]   // T[P] 对象对应的属性值
    //  [P in K] 遍历 K  
    //  值为 T[P]  Obj["name"] 
  }

  interface User {
    name: string
    age:  number
  }

  type PickUser = Pick<User, 'name'>  // { name: string }
 

})()

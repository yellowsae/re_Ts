(() => {
  // 1. 泛型类
  class ArrayList<T> {
    public list: T[] = []; // 空数组 
    add(value: T): number {
      this.list.push(value);
      return this.list.length
    }

    del(index: number) {
      this.list.splice(index, 1)
    }

    set(index: number, value: T) { // 替换
      this.list[index] = value;
    }

    get(index: number): T {
      return this.list[index]
    }
  }

  const list = new ArrayList<number>();

  list.add(0);
  list.add(1);
  list.add(2);
  list.add(3);
  list.set(0, 1123)
  list.del(0)
  console.log(list.get(0));
  console.log(list);



  // 2. 泛型类  类型
  interface IConstructor {
    new(): void;  // 使用接口 必须有是一个类
  }

  class User {
    public name!: string;
    public age!: number;
  }

  // function createInstanceFactory(instance: IConstructor) {
  //   return new instance()  // 泛型一个类
  // }
  // const instance = createInstanceFactory(User)  // 把鼠标放到 instance 上面发现是 void 类型。很明显不合理。

  // 注意： 当在函数参数中书写类类型的时候需要 { new (): T } 写法。
  function createInstanceFactory<T>(instance: { new(): T }): T {
    return new instance();
  }
  const instance = createInstanceFactory(User)

  

})()

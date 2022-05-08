(() => {
  // ?: 可选属性

  /**
   * 在⾯向对象语⾔中，接⼝是⼀个很重要的概念，它是对⾏为的抽象，⽽具体如何⾏动需要由类去实现。
    TypeScript 中的接⼝是⼀个⾮常灵活的概念，除了可⽤于对类的⼀部分⾏为进⾏抽象以外，也常⽤于对
    「对象的形状（Shape）」进⾏描述。
   */
  interface Person {
    name: string;
    age?: number;
  }

  const lolo: Person = {
    name: "Yellowsea"
  }


})()

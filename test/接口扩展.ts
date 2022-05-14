interface IUser {
  name: string;
  age: number;
  eat(): void;
}

// let user: IUser;

// user = {
//   name: 'Yellowsea',
//   age: 123,
//   eat() {
//     console.log('test')
//   }
// }

// 接口继承

interface Person {
  eat(): void;
  say(): void;
}


interface BadBoy {
  smoking(): void;
}

interface User1 extends Person { }
// 继承多个接口
interface User extends BadBoy, Person { }

// const user: User = {}





(() => {
  // 8.1 装饰器语法


  // @Plugin({...})
  // 其实这是装饰器的语法，装饰器的本质是⼀个函数，通过装饰器我们可以⽅便地定义与对象相关的元数据。

  // @Plugin({
  //   pluginName: 'Device',
  //   plugin: 'cordova-plugin-device',
  //   pluginRef: 'device',
  //   repo: 'https://github.com/apache/cordova-plugin-device',
  //   platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows'],
  // })
  // @Injectable()
  // // export class Device extends IonicNativePlugin { }


  // 8.2 装饰器的应用
  function Greeter(target: Function): void {
    target.prototype.greet = function (): void {
      console.log("Hello Semlinker!");
    };
  }
  @Greeter
  class Greeting {
    constructor() {
      // 内部实现
    }
  }
  let myGreeting = new Greeting();
  (myGreeting as any).greet(); // console output: 'Hello Semlinker!';
})

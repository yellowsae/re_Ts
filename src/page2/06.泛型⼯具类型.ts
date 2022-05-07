(() => {
  //   TypeScript 内置了⼀些常⽤的⼯具类型，⽐如 Partial、Required、Readonly、Record
  // 和 ReturnType 等


  // 7.1 Partial
  // Partial<T> 的作⽤就是将某个类型⾥的属性全部变为可选项 ? 。
  type Partial<T> = {
    [P in keyof T]?: T[P]
  }
  /**
   * 在以上代码中，⾸先通过 keyof T 拿到 T 的所有属性名，然后使⽤ in 进⾏遍历，将值赋给 P ，最
    后通过 T[P] 取得相应的属性值。中间的 ? 号，⽤于将所有属性变为可选。
   */
  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
  }

  const todo1 = {
    title: 'organize, dest',
    description: "clear clutter"
  }

  const todo2 = updateTodo(todo1, {
    description: "throw out trash"
  }) // 这里给的第二个参数就是 可选的 接口参数

  console.log(todo2)  // { title: 'organize, dest', description: 'throw out trash' }

})()

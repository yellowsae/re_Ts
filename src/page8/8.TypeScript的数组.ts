(() => {
  // 8.1 数组解构
  let x: number; let y: number; let z: number;
  let five_array = [0,1,2,3,4];
  [x, y, z] = five_array

  console.log(x, y, z)  // 0 1 2


  // 8.2 数组展开运算符
  let two_array = [0, 1];
  let five_arrayB = [...two_array, 2,3,4]
  console.log(five_arrayB)

  // 8.3 数组遍历

  let colors: string[] =  ["red", "green", "blue"];
  for (let i of colors) {
    console.log(i)
  }

  
})()

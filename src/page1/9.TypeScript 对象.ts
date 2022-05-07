(() => {
  // 9.1 对象解构
  let person = {
    name: "yellowsea",
    gender: 'Male'
  }

  let { name, gender } = person;



  // 9.2 对象展开运算符
  let personB = {
    name: "yellowsea",
    gender: "Male",
    address: "Xiamen",
  };
  // 组件对象
  let personWithAge = { ...personB, age: 33 };
  console.log(personWithAge);
  // 获取除了某些项外的其它项
  let { address, ...rest } = personB;
  console.log(address, rest)


  
})()

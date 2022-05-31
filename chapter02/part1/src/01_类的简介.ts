// 使用class关键字来定义一个类
/*
*   对象中主要包含两个部分
*       属性
*       方法
* */
class Person {
//    定义属性
    name:string = '孙悟空';
    // 在属性前使用static关键字可以定义类属性（静态属性）
    static age:number = 12;
}
const per = new Person()
console.log(per);
// console.log(per.age, per.name)
console.log(Person.age)
"use strict";
// 使用class关键字来定义一个类
/*
*   对象中主要包含两个部分
*       属性
*       方法
* */
class Person {
    constructor() {
        //    定义属性
        this.name = '孙悟空';
        this.age = 12;
    }
}
const per = new Person();
console.log(per);
console.log(per.age, per.name);

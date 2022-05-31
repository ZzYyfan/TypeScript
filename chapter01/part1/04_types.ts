let a:object;
a = {};
a = function (){};

// {}用来指定对象中可以包含那些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名上加上?表示属性是可选的
type haha = {name:string, age?: number}
let b:haha;
b = {name: '孙悟空', age: 12};
b = {name: '1'}

// [propName: string]: any 表示任意类型的属性
let c:{name:string, [propName: string]: any};
c = {name:'猪八戒', a:1, b:2, c:3}

/*
*  设置函数结构的类型声明：
*       语法：(形参：类型, 形参：类型 ...) => 返回值
* */
let d: (a: number, b: number)=>number;
d= function (a, b){
    return 123;
}

/* 数组表达方法
 类型[]
 Array<类型>
 */
// string[] 表示字符串数组
let e:string[];
e = ['a', 'c'];

let g: Array<number>;
g = [1, 2, 3];

/*
 * 元组，元祖就是固定长度的数组
 *      语法： [类型, 类型, 类型]
 */

let h: [string, string];
h = ["232","123"]

/*
*  enum 枚举
* */
enum Gender{
    male,
    female
}
let i: {name: string, gender:Gender};
i = {
    name: "孙悟空",
    gender: Gender.female
}

console.log(i.gender === Gender.female);
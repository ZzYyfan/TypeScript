//  字面量进行类型声明
let a: 10;
a = 10;

let b: "male" | "female"
let c: boolean | string
c = true;
c = 'hello';

// any表示任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d;
d = 10;
d = 'hello';
d = true;

// unknown 表示为未知类型的值
let e: unknown;
e = 10;
e = 'hello';

let s:string;

// d的类型是any，它可以赋值给任意变量
s = d;

e = 'hello';
// 类型断言,可有用来告诉解析器变量的实际类型
s = e as string;
s = <string> e;

// void 用来表示空
function fn(): void{
    return
}
// never 用来表示永远不会返回结果
function fn2(): never{
    throw new Error("报错了！");
}

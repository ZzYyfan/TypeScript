// 声明一个变量a，同时指定它的类型为number
let a: number;

// a的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a= 33 ;
// a = 'hello'

function sum (a: number, b: number) :string{
    return (a + b).toString();
}
sum(123,456)
// TypeScript function约束
// function test(): string {// 这里设定函数返回值必须是一个string类型
//     return 'hello world'
// }
// console.log(test())
// // 带参数函数
// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(3, 5))
// 可选参数和默认参数
// function buildName(firstName: string, lastName?: string) {// 参数可选添加？
//     if (lastName) {
//         return firstName + lastName;
//     } else {
//         return firstName;
//     }
// }
// let result1 = buildName("bbb");
// console.log(result1)
// let result2 = buildName("bbb", "nnn");
// console.log(result2)
//当参数为默认时
// function total(price: number, rate: number = 0.7) {
//     let discount = price * rate;
//     console.log("计算结果是：", discount)
// }
// console.log(total(1000))
// console.log(total(1000, 0.8))
// 剩余参数
// function addNumbers(...nums: number[]) {
//     let sum: number = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i]
//     }
//     return sum
// }
// console.log(addNumbers(1, 2, 4))
// console.log(addNumbers(11, 21, 41, 55, 88))
// interface FullName {
//     firstName: string;
//     secondName: string;
// }
// function printName(name: FullName) {
//     console.log(name.firstName + name.secondName)
// }
// let obj = {// 传入的参数必须含有firstName/secondName
//     age: 20,
//     firstName: 'zhangsan',
//     secondName: 'lisi'
// }
// printName(obj)
//构造函数
// let myFunction = new Function("a", "b", "return a *b");
// let x = myFunction(4, 5)
// console.log(x)
//递归函数
// function factorial(number) {
//     if (number <= 0) {
//         return 1;
//     } else {
//         return (number * factorial(number - 1))
//     }
// }
// console.log(factorial(8))
//箭头函数
// let foo1 = (x: number) => 10 + x
// console.log(foo1(4))

// let foo = (x: number) => {
//     x = 10 + x
//     console.log(x)
// }
// foo(2)
// 不指定函数的参数类型，通过函数内来推断参数类型:
// let func = (x) => {
//     if (typeof x == 'number') {
//         console.log(x + '是一个数字')
//     } else if (typeof x == 'string') {
//         console.log(x + '是一个字符串')
//     }
// }
// func(12)
// func('tom')
// 函数重载
function disp(s1: string): void;
function disp(n1: number, s1: string): void;

function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1, "xyz");























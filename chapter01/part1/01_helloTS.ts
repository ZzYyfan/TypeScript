enum Gender {
    Man,
    Woman
}

type Person= {name:string, age:number, [propName: string]: string | number}
// {name:string, age: number, [propName:string]: any}
let tom:Person;
tom = {
    name: 'aa',
    age: 12,
    sex: Gender.Woman
}
// console.log(tom)
let creatPerson: (tom) => void
creatPerson = function (tom){
    console.log(tom)
}
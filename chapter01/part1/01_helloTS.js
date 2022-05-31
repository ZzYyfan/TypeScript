var Gender;
(function (Gender) {
    Gender[Gender["Man"] = 0] = "Man";
    Gender[Gender["Woman"] = 1] = "Woman";
})(Gender || (Gender = {}));
// {name:string, age: number, [propName:string]: any}
var tom;
tom = {
    name: 'aa',
    age: 12,
    sex: Gender.Woman
};
// console.log(tom)
var creatPerson;
creatPerson = function (tom) {
    console.log(tom);
};

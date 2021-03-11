"use strict";
class Calculator {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
class Employee {
    constructor() {
        this.id = 0;
        this.name = '';
        this.doj = new Date();
        this.city = '';
    }
}
class Department {
    constructor() {
        this.id = 0;
        this.name = '';
    }
}
function print(obj) {
    console.log(obj.id, obj.name);
}
let calc = new Calculator();
//print(calc);
let emp = new Employee();
print(emp);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
let c = Color.Red;
let d = new Department();
//generics
let nos = [10, 20, 30, 40];
function sort(data, comparerFn) {
    for (let i = 0; i < data.length - 1; i++)
        for (let j = i + 1; j < data.length; j++) {
            if (comparerFn(data[i], data[j]) > 0) {
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
}
let emps = [];
let comparer = (left, right) => 0;
sort(emps, comparer);
function fn(data) {
}
fn(10);
fn(emp);
function add(...args) {
    function parseArg(n) {
        if (Array.isArray(n))
            return add(...n);
        return isNaN(n) ? 0 : parseInt(n, 10);
    }
    return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
}

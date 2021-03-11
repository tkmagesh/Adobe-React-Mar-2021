class Calculator{
    public add(x : number, y : number) : number{
        return x + y;
    }

    public subtract(x : number, y : number) : number{
        return x - y;
    }
}

interface Identity{
    id : number
    name : string
}


class Employee{
    public id : number = 0;
    public name : string = '';
    public doj : Date = new Date();
    public city : string = '';
}

class Department{
    private id : number = 0;
    public name : string = ''
}

function print(obj : Identity){
    console.log(obj.id, obj.name);
}

let calc : Calculator = new Calculator();
//print(calc);

let emp : Employee = new Employee();
print(emp);

enum Color {
    Red = 0,
    Blue = 1,
    Green = 2,
    Yellow = 3
}

let c : Color = Color.Red

let d : Department = new Department();


//generics

let nos : Array<number> = [10,20,30,40]

type Comparer<T> = (left : T, right : T) => number 

function sort<T>(data : T[], comparerFn : Comparer<T>){
    for(let i=0; i<data.length-1; i++)
        for(let j = i+1; j< data.length; j++){
            if (comparerFn(data[i], data[j]) > 0){
                [data[i], data[j]] = [data[j], data[i]]
            }
        }
}

let emps : Employee[] = [];

let comparer = (left: Employee, right : Employee) => 0

sort(emps, comparer)

function fn(data : any){

}

fn(10)
fn(emp)

function add(...args){
    function parseArg(n){
        if (Array.isArray(n)) return add(...n);
        return isNaN(n) ? 0 : parseInt(n, 10);
    }
    return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
}

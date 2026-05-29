let a: number = 20;
console.log(a);

let num: bigint = 263738927673316272892n;
console.log(num);

let str: string = "Suraj";
console.log(str);
let obj: { firstName: string, lastName: string } = {
    firstName: "suraj",
    lastName: "Birajdar"
}

console.log(obj);

// spread operator - it copy previous object and can add new properties into existing object
obj = { ...obj, firstName: "Rajabhau" };
console.log(obj);

//tuple
let tupleVal: [number, string, boolean] = [50, "suraj", true];

//Enum
enum CONTEXT {
    APPNAME = "myApp",
    APPTYPE = "WEB"
}

console.log(CONTEXT.APPTYPE);

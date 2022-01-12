//hw1
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
};
person.name;
person.occupation;
person['name'];
person['occupation'];
Object.values(person);

//hw2
let obj = {
    b: 2,
    a: 1,
    c: 3,
};
let objKey = Object.keys(obj);
for (let i in objKey) {
    objKey[i]=objKey[i].toUpperCase()
}
console.log(objKey)

//hw3
let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};
let family = Object.create(myFamily);
console.log(family);

//hw4
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};
//cách 1
obj.bar[3].xyz = 606;
console.log(obj.bar[3].xyz);
//cách 2
obj["bar"][3]["xyz"] = 606;
console.log(obj.bar[3].xyz);

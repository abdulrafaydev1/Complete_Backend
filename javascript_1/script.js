const user = {
    name: "Rafay",
    age: 20
};

function test() {
    console.log(user.name);

    const user = {
        name: "Ali",
        age: 25
    };

    console.log(user.name);
    console.log(user.age);
}

test();

console.log(user.name);
console.log(user.age);
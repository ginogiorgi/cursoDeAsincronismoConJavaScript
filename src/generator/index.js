function* gen() {
    yield 1;
    yield 2;
    yield 3;
};

const generator = gen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

function* iterate(array) {
    for (let value of array) {
        yield value;
    };
};

const it = iterate(["Gino", "Tu hermana", "Lol", "Dou", "Xd"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//
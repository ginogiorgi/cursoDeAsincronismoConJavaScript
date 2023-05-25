const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("HOLAAA!"), 2000)
            : reject(new Error("ERROR SALAME!!"));
    });
};

const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hola papaaaa");
}

console.log("Before");
await anotherFunction();
console.log("After");
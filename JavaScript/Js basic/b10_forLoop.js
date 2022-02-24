//For in :  loops through the properties of an object
const user = {
    name: "Manh",
    age: 25
}

for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        var x = 0;
        var x = 1;
        console.log(x);
        const element = user[key];
        console.log(element);
    }
}


//For of: loops through the values of an iterable object.let language = "JavaScript";
let language = "JavaScript";
let text = "";
for (let x of language) {
    text += x + " ";
}
console.log(text);

//
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
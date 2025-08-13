let f1=undefined;
let f2=null;
let f3=9;
let f4=-0;
let f5=NaN;
let f6="";
let f7=0n;
if(!f4) {
    console.log("Falsy");
}

function printName(person){
    if (person===undefined ||
        person===null) {
            console.log("person의 값이 없음");
            return;
        }
console.log(person.name);
    }

    let person;
    printName(person);
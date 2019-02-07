function print(msg){
    console.log(msg);
}
// Ctrl+C för att avbryta exekvering

/*
setTimeout(() => print('in the future'), 5000);
print('one more thing');
*/
/*
const id = setTimeout(() => print('in the future'), 500);
print('one more thing');
clearTimeout(id);
*/
/*
let saldo = 0;

function add(amount){
    let tmp = saldo;
    setTimeout(() => saldo = tmp+amount, 1000);
}

function sub(amount){
    let tmp = saldo;
    setTimeout(() => saldo = tmp-amount, 500);
}

//Kallas race-condition (kapplöpning)
add(1000);
sub(1000);
setTimeout(() => print(saldo), 2000);
*/
/*
let p = new Promise(
    (resolve, reject) => {
        // do my magic
        let answer = 42;
        resolve(42);
    }
);

p.then((value) => print(value));
*/

let p = new Promise(
    (resolve, reject) => {
        // do my magic
        let answer = 42;
        setTimeout(() => resolve(42), 1000);
    }
);
/*
p.then((value) => new Promise(
    (resolve) => resolve(value+1)
    )
).then(
    (x) => print(x)
);
*/

//p.catch(error => console.log('fel'));
/*
p.then(
    (value) => value+1
).then(
    (x) => print(x)
).catch(e => print('fel'));
*/
/*
async function foo(){
    throw new Error('hepp')
    return 42;
}

foo().then(
    (value) => value+1
).then(
    (x) => print(x)
).catch(e => print('fel'));
*/

let saldo = 0;
async function foo(){
 //   throw new Error('hepp');
    saldo = 42;
}

print(saldo);
foo().catch(x => print(x));
print(saldo);


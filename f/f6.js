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


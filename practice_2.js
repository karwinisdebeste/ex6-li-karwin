// practice 2
var accounts= [];

function createAcc(username){
    accounts.push(username);
    return username;
}
function getAccount(username){
    var matchAcc;
    accounts.forEach(function (internalAccount){
            if(internalAccount.username===username){
                matchAcc = internalAccount;
            }
    });
    return matchAcc;
}
function deposit (account, amount){
    account.balance += amount;
}
function withdraw (account, amount){
    account.balance -= amount;
}
function getBalance (account){
    return account.balance;
}

//create acc
var andrewAccount = createAcc({username: "Andrew", balance:0});
var jensAccount = createAcc({username:"Jens",balance:200});

deposit(andrewAccount, 100);
console.log(getBalance(andrewAccount));
withdraw(andrewAccount, 50);
console.log(getBalance(andrewAccount));
console.log("array Accounts:");
console.log(accounts);
console.log("Obj: Jens");
console.log(jensAccount);

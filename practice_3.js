// practice 3
var accounts= [];

function createAcc(username){
    accounts.push(username);
    return username;
}
//--------------------
//getAcc
/*
function getAccount(username){
    var matchAcc;
    accounts.forEach(function (internalAccount){
            if(internalAccount.username===username){
                matchAcc = internalAccount;
            }
    });
    return matchAcc;
} */
function getAccount(username){
    var matchAcc;
        for(var i = 0;i<accounts.length; i++){
         if (accounts[i].username === matchAcc){
             matchAcc=accounts[i];
         }
        }
    return matchAcc;   
}
//-------------------
function deposit (account, amount){
   if (Number.isInteger(amount) === false){
       console.log("You made a boo boo. \nThe amount you put is not an integer!");
   }
   else {
        //match acc
      var matchAcc;
        for(var i = 0;i<accounts.length; i++){
         if (accounts[i].username === account){
             matchAcc=accounts[i];
         }
        }
      matchAcc.balance += amount;
      console.log("Account: "+matchAcc.username);
    return "You have just deposited " + amount + " \nThe new balance is " + matchAcc.balance + ".";
   }
}
function withdraw (account, amount){
   if (Number.isInteger(amount) === false){
       console.log("You made a boo boo. \nThe amount you put is not an integer!");
   }
   else {
        //match acc
      var matchAcc;
        for(var i = 0;i<accounts.length; i++){
         if (accounts[i].username === account){
             matchAcc=accounts[i];
         }
        }
      matchAcc.balance -= amount;
      console.log("Account: "+matchAcc.username);
    return "You have just withdrew " + amount + " \nThe new balance is " + matchAcc.balance + ".";
   }
}
function getBalance (){
    return function (account){
        return "The balance of " +account.username+ " is " +account.balance+ ".";
    };
}

//create acc
var andrewAccount = createAcc({username: "Andrew", balance:0});
var jensAccount = createAcc({username:"Jens",balance:200});

console.log("deposit with int:");

var depositMoni = deposit("Andrew", 100);
console.log(depositMoni);
var depositMoni = deposit("Andrew", 50);
console.log(depositMoni);
//--------------------
console.log("Withdraw with int:");
var withdrawMoni =withdraw("Andrew",50);
console.log(withdrawMoni);
var withdrawMoni =withdraw("Andrew",20);
console.log(withdrawMoni);
//--------------------
//Deposit with a string
console.log("\n\n\n\nDeposit with a string :\n")
deposit(andrewAccount, "100");

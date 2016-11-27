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
var mainConstruct = function(account, balance){
    this.account = account;
    this.balance = balance;
    this.amount = 0;
    this.deposit =function (amount){
    if (Number.isInteger(amount) === false){
       console.log("You made a boo boo. \nThe amount you put is not an integer!");
    }
    else {
      this.balance += amount;
      console.log("Account: "+ this.account);
    return "You have just deposited " + amount + " \nThe new balance is " + this.balance + ".";
    }
};
    this.withdraw = function(amount){
    
    if (Number.isInteger(amount) === false){
       console.log("You made a boo boo. \nThe amount you put is not an integer!");
   }
   else {
      this.balance -= amount;
      console.log("Account: "+this.username);
    return "You have just withdrew " + amount + " \nThe new balance is " + this.balance + ".";
   }
};
};

function getBalance (){
    return function (account){
        return "The balance of " +account.username+ " is " +account.balance+ ".";
    };
}

//create Construct
var pannenKoek = new mainConstruct("Pannenkoek",500);

//create acc
var andrewAccount = createAcc(pannenKoek);



console.log("deposit with int:");
var depositMoni = andrewAccount.deposit(100);
console.log(depositMoni);
var depositMoni = andrewAccount.deposit(50);
console.log(depositMoni);
//--------------------
console.log("-------------------");
console.log("Withdraw with int:");
var withdrawMoni = andrewAccount.withdraw(100);
console.log(withdrawMoni);
var withdrawMoni = andrewAccount.withdraw(50);
console.log(withdrawMoni);

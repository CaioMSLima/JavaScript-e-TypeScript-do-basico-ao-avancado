function Account(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function (value) {
    if (this.balance < value) {
        console.log("insufficient funds: " + this.seeBalance());
        return;
    }

    this.balance -= value
    this.seeBalance()
}

Account.prototype.deposit = function (value) {
    this.balance += value
    this.seeBalance()
}

Account.prototype.seeBalance = function () {
    console.log(`Ag: ${this.agency}/Account: ${this.account} /Balance: R$${this.balance.toFixed(2)}`);
}

const account1 = new Account(11, 22, 10)

//{ agency: 11, account: 22, balance: 10 }
console.log(account1);

// Ag: 11/Account: 22 /Balance: R$510.00
account1.deposit(500);

//Ag: 11/Account: 22 /Balance: R$110.00
account1.withdraw(400)

function CurrentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance);
    this.limit = limit;
}

//copy the prototype
CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function (value) {
    if ((this.balance + this.limit) < value) {
        console.log(`Insufficient funds: ${this.balance}`);
        return;
    }
    
    this.balance -= value
    this.seeBalance()
}

const currentAccount = new CurrentAccount(36,901,0,1000)

//Ag: 36/Account: 901 /Balance: R$-500.00
currentAccount.withdraw(500);

function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance);
}

//copy the prototype
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.constructor = SavingsAccount;

const savingsAccount = new SavingsAccount(56,178,0)

// Ag: 56/Account: 178 /Balance: R$0.00
//insufficient funds: undefined
savingsAccount.withdraw(500);
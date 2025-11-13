// 🧩 2. BankAccount Class — Task Requirements
// Task:
//  Create a class called BankAccount to simulate a simple bank account.
// Requirements:
// The class must have a constructor with two properties: owner (string) and balance (number, default 0).


// Add a method deposit(amount) that increases the balance.


// Add a method withdraw(amount) that decreases the balance — only if there’s enough money. Otherwise, print "Insufficient funds".


// Create one account, make a deposit and a withdrawal, and print the final balance.

class  BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
    }


    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
        }else{
          console.log("Insufficient funds")
        }
        }
    }
        const myBankAccount = new BankAccount("Bob", );
        myBankAccount.deposit(70);
        myBankAccount.withdraw(89);
 
    console.log(myBankAccount.balance);
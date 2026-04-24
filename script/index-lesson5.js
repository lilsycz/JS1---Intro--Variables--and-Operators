const account = {
    accountName: "Hsuan",
    balance: 1010000,
    getBalance: function() {
        console.log(`The balance of ${account.accountName} is ${account.balance}.`);
    },
    deposit: function(amount) {
        account.balance += amount;
                console.log(`You have deposited ${amount}. Your new balance is ${account.balance}.`);
    },
    withdraw: function(amount) {
        if (amount > account.balance) {
            account.accountError();
        }
        else {
            account.balance -= amount;
            console.log(`You have withdrawn ${amount}. Your new balance is ${account.balance}.`);  
            }
    },
    accountError: function() {
                console.log("You don't have enough money.");
    }, 
    getAccountName: function() {   
        console.log(`The account name is ${account.accountName}.`);
    },
    exitAccount: function() {
        console.log("You have exited the account.");
    }
};

function atm() {
    const message = parseFloat(
        prompt(
            "Welcome to the ATM. Please select a choice 1.) See balance 2. ) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    if (isNaN(message)) {
        console.log("Invalid input. Please enter a number.");
        return;
    }

    switch (message) {
        case 1:
            account.getBalance();
            break;
        case 2:
            const depositAmount = parseFloat(prompt("Please enter the amount you want to deposit:"));
            account.deposit(depositAmount);
            break;
        case 3:
            const withdrawAmount = parseFloat(prompt("Please enter the amount you want to withdraw:"));
            account.withdraw(withdrawAmount);
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            account.exitAccount();
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}

atm();


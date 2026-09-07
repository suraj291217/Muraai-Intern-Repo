function bankAccount() {
    let balance = 1000;
    return {
        getBalance() {
            return balance;
        },
        deposit(amount) {
            balance += amount;
        }
    };
};
let account = bankAccount();
console.log(account.getBalance());
account.deposit(5000);
console.log(account.getBalance());
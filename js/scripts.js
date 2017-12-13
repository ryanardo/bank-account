// BACK END LOGIC
var accountLog = [];

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
};

BankAccount.prototype.withdrawl = function (balance, withdrawl) {
  this.balance = this.balance - withdrawl;
};

BankAccount.prototype.deposit = function (balance, deposit) {
  this.balance = this.balance + deposit;
};

// FRONT END LOGIC
$(document).ready(function() {
  var accountName;
  var accountBalance;
  var transactionDeposit;
  var transactionWithdrawl;
  var newAccount = new BankAccount(accountName, accountBalance);

  $("#create-account").submit(function(event) {
    event.preventDefault();
    // debugger;
    accountName = $("#account_name").val();
    accountBalance = parseInt($("#account_balance").val());
    newAccount.name = accountName;
    newAccount.balance = accountBalance;
    accountLog.push(newAccount);
    console.log(accountBalance);
    console.log(newAccount);
    console.log(accountLog);
    $("#current-balance").show();
    $("#current-balance").text(newAccount.balance)
  }); // End of 'create-account' submit listener.

  $("#post-transaction").submit(function(event) {
    event.preventDefault();
    transactionDeposit = parseInt($("#transaction_deposit").val());
    transactionWithdrawl = parseInt($("#transaction_withdrawl").val());
    newAccount.withdrawl(accountBalance, transactionWithdrawl);
    newAccount.deposit(accountBalance, transactionDeposit);
    console.log(transactionDeposit);
    console.log(transactionWithdrawl);
    $("#current-balance").text(newAccount.balance);
    $("#current-balance").show();
  }); // End of 'post-transaction' submit listener.
}); // End of 'ready' listener.

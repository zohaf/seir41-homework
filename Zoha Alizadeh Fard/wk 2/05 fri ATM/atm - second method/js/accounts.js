// Our accounts object is solely concerned with rules for bank accounts.

// It is the single source of truth for balances.

// It knows how to handle overdraft protection.

// This code has never heard of the DOM.

const accounts = {
    checkingBalance: 0,
    savingsBalance: 0,
  
    total: function () {
      return this.checkingBalance + this.savingsBalance;
    },
  
    checkingDeposit: function (amount) {
      this.checkingBalance += Number(amount);
    },
  
    checkingWithdraw: function (amount) {
      amount = Number(amount);
      if (amount <= this.checkingBalance) {
        this.checkingBalance -= amount;
      } else if (amount <= this.total()) {
        const difference = amount - this.checkingBalance;
        this.checkingBalance = 0;
        this.savingsBalance -= difference;
      }
    },
  
    savingsDeposit: function (amount) {
      this.savingsBalance += Number(amount);
    },
  
    savingsWithdraw: function (amount) {
      amount = Number(amount);
      if (amount <= this.savingsBalance) {
        this.savingsBalance -= amount;
      } else if (amount <= this.total()) {
        const difference = amount - this.savingsBalance;
        this.savingsBalance = 0;
        this.checkingBalance -= difference;
      }
    },
  };
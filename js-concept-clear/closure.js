
//ja bahir diya dekha jabe na
//
//return ekta function er valure return kortche

/* 
const bank = owner => {
    balance = 0;
    return amount => {
        // balance = balance + amount
        balance +=  amount;
        return balance;
    }
}
 */
const bank = owner => {
    balance = 0;
    return {
        diposit: amount => {
            // balance = balance + amount
            balance += amount;
            return balance;
        },
        Withdra: amount => {
            // balance = balance + amount
            balance -= amount;
            return balance;
        }
    }
}






const MofijBank = bank('Mofij');
// console.log(MofijBank(100));
// console.log(MofijBank(300));
console.log(MofijBank.diposit(100));
console.log(MofijBank.diposit(300));
console.log(MofijBank.diposit(50));
console.log(MofijBank.balance);
console.log(MofijBank.diposit(200));
console.log(MofijBank.Withdra(100));
console.log(MofijBank.Withdra(200));


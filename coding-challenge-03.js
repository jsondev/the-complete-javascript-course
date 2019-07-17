var tips = tips || [];
var totals = totals || [];

// function tipCalculator(bill) {
//     switch (true) {
//         case bill < 50:
//             tips.push(calcTip(bill, 20));
//             totals.push(calcTotal(bill, 20));
//             break;
//         case bill < 200:
//             tips.push(calcTip(bill, 15));
//             totals.push(calcTotal(bill, 15));
//             break;
//         case bill > 200:
//             tips.push(calcTip(bill, 10));
//             totals.push(calcTotal(bill, 10));
//             break;
//     }
// }

// function calcTotal(amount, tipPercentage) {
//     return amount * (tipPercentage / 100) + amount;
// }

// function calcTip(amount, tipPercentage) {
//     return amount * (tipPercentage / 100);
// }

// tipCalculator(30);
// tipCalculator(201);
// tipCalculator(100);

class Bill {
    /**
     * 
     * @param {string} resturant 
     * @param {number} amount 
     * @param {number} tipPercentage 
     */
    constructor(resturant, amount, tipPercentage) {
        this.resturant = resturant;
        this.amount = amount;
        this.tipPercentage = tipPercentage;
    }
    calcTip() {
        return Math.ceil(this.amount * (this.tipPercentage / 100));
    }
    calcTotal() {
        return Math.ceil(this.amount * (this.tipPercentage / 100) + this.amount);
    }
    calcAll() {
        switch (true) {
            case this.amount < 50:
                tips.push(this.calcTip());
                totals.push(this.calcTotal());
                break;
            case this.amount < 200:
                tips.push(this.calcTip());
                totals.push(this.calcTotal());
                break;
            case this.amount > 200:
                tips.push(this.calcTip());
                totals.push(this.calcTotal());
                break;
        }
    }
}

var potBelly = new Bill('Potbelly', 33, 10);
var oliveGarden = new Bill('Olive Garden', 33, 10);
var subway = new Bill('Subway', 16, 0);
potBelly.calcAll();
oliveGarden.calcAll();
subway.calcAll();
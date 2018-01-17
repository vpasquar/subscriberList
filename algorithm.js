const invoices = [
  {invoiceNum: 245, accountNum: 1, paid: true},
  {invoiceNum: 312, accountNum: 2, paid: false},
  {invoiceNum: 700, accountNum: 3, paid: true},
  {invoiceNum: 604, accountNum: 4, paid: false},
  {invoiceNum: 105, accountNum: 5, paid: true},
  {invoiceNum: 200, accountNum: 6, paid: true},
  {invoiceNum: 001, accountNum: 7, paid: true},
  {invoiceNum: 002, accountNum: 8, paid: true},
  {invoiceNum: 003, accountNum: 9, paid: false},
  {invoiceNum: 004, accountNum: 10, paid: true}
];
const subscribers = [
  {firstName: "Kobe", lastName: "Bryant", accountNum: 1},
  {firstName: "Bambi", lastName: "Deer", accountNum: 9},
  {firstName: "Frank", lastName: "Test", accountNum: 8},
  {firstName: "Lebron", lastName: "James", accountNum: 4},
  {firstName: "Dude",  lastName: "Test", accountNum: 5},
  {firstName: "Eric", lastName: "Cartman", accountNum: 6},
  {firstName: "Kyle", lastName: "Test", accountNum: 7},
  {firstName: "Khloe", lastName: "Test", accountNum: 3},
  {firstName: "Jennifer",  lastName: "Test", accountNum: 2},
  {firstName: "Serena",  lastName: "Williams", accountNum: 10},
];

// didPay returns an array of account nums that are in deliquency
didPay = (invoices) => {
	    //array to be filled below
	    const cancelledAccounts = []
	    invoices.map(function(i) { //iterate over invoice array
	        if (!i.paid) {             
	            cancelledAccounts.push(i.accountNum);
	        }
	    });
	    return cancelledAccounts;
}	    

// list takes in the array from didPay
// and subscribers and produces a list of cancelled accounts and names 
produceList = (cancelledAccounts,subscribers) => {
	 const cancelledList = []
	 subscribers.map(function(s) { //iterate over subscriber list
	 	if (cancelledAccounts.includes(s.accountNum)) { 
	 	//for each subscriber, check if matched account num. if so push into list
	 		cancelledSubscriber = {
	 			accountNum:s.accountNum,
	 			firstName: s.firstName,
	 			lastName: s.lastName
	 		}
	 		cancelledList.push(cancelledSubscriber);
	 	}
	 })
	 return cancelledList;
}

// returns the result of the produceList function with 
// the result of the didPay function as the second argument
console.log(produceList((didPay(invoices)),subscribers));



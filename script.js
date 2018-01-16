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
]
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
]
 
$("#clear").on("click", function(e) {
	e.preventDefault();
	$("#tbody").empty();
});

$("#submit").on("click",function(e) {
	e.preventDefault();
	console.log("hello");

	didPay = (invoices, subscribers) => {
	    const unpaid = invoices.map(function(i) {
	        if (!i.paid) {
	           return i.accountNum
	        }
	    });
	    const paid = invoices.map(function(i) {
	  	    if(i.paid) {
	  		    return i.accountNum
	  	    }
	    })
	   //console.log(unpaid)
	   //console.log(paid)
	   subscribers.map(function(subscriber, i) {
	       if (paid.includes(subscriber.accountNum)) {
	            $("#tbody").append("<tr>" + 
	            	"<td>"    + i                    + "</td>" + 
	            	"<td>"    + subscriber.accountNum + "</td>" +
	                "<td>"    + subscriber.firstName + "</td>" +
	                "<td>"    + subscriber.lastName + "</td>" + 
	                "<td>"    + "NO"          + "</td></tr>"); 
	       } else if (unpaid.includes(subscriber.accountNum)) {
	   	        $("#tbody").append("<tr>" + 
	   	        	"<td>"    + i                    + "</td>"  +
	   	        	"<td>"    + subscriber.accountNum + "</td>" +
	                "<td>"    + subscriber.firstName + "</td>" +
	                "<td>"    + subscriber.lastName  + "</td>" + 
	                "<td>"    +  "YES"    + "</td></tr>");   
	       }
	  })  
	};

	didPay(invoices,subscribers);
});
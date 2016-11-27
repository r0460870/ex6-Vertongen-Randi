var Account = function (name, balance)
{
    this.username = name;
    this.balance = balance;


    this.deposit = function deposit (account, amount) {
    if(!isNaN(amount)){
    	account.balance += amount;
    }

     else {
            console.log("geef aub een geldig getal op voor amount.");
        }
    };

    this.withdraw =function withdraw (account, amount) {
      if(!isNaN(amount)){
    	account.balance -= amount;
    }
         else {
            console.log('geef aub een geldig getal op voor te storten');
        }
    };
} ;





function getBalance()
{
    return function (account)
    {
        return account.balance;
    };

}



function createAccount (account) {
	accounts.push(account);
	return account;
}


function getAccount (name) {
	var matchedAccount;
var arrayLength = accounts.length;
for( var i =0;i< arrayLength;i++){
	accounts.forEach( function (internal_account) {
		if (internal_account.username === name) {
			matchedAccount = internal_account;
		}
	} );
}

	return matchedAccount;
}
//var creatie voor func (like myfunc voorbeeld)
var balans = getBalance();

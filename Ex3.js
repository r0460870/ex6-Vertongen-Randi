		var accounts = [ ];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;
var arrayLength = accounts.length;
for( var i =0;i< arrayLength;i++){
	accounts.forEach( function (internal_account) {
		if (internal_account.username === username) {
			matchedAccount = internal_account;
		}
	} );
}

	return matchedAccount;
}


function deposit (account, amount) {
if(!isNaN(amount)){
	account.balance += amount;
}
}

function withdraw (account, amount) {
  if(!isNaN(amount)){
	account.balance -= amount;
}}

function getBalance (account) {
	return account.balance;
}

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

withdraw(andrewsAccount, 11);
console.log(getBalance(andrewsAccount));

var existingAccount = getAccount('Andrew');
console.log(getBalance(andrewsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);

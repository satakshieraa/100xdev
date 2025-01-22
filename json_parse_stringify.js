console.log("hello");

// JSON.parse()
// JSON.parse() takes a JSON string and transforms it into a JavaScript object.

let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userStr);

console.log(userObj);

//Executing this code will produce the following output:

/* Output
{name: 'Sammy', email: 'sammy@example.com', plan: 'Pro'}
  email: "sammy@example.com"
  name: "Sammy"
  plan: "Pro" */


// JSON.stringify()
// JSON.stringify() takes a JavaScript object and transforms it into a JSON string.

let userObj1 = {
  name: "Sammy",
  email: "sammy@example.com",
  plan: "Pro"
};

let userStr1 = JSON.stringify(userObj);

console.log(userStr1);


//Executing this code will produce the following output:

// Output
// {"name":"Sammy","email":"sammy@example.com","plan":"Pro"}
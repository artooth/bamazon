let mysql = require("mysql");
let inquirer = require("inquirer");
require('console.table');

let connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id" + connection.threadID);
    showProducts();
});

// FUNCTIONS

function showProducts() {
    connection.query("SELECT * from products", function (err, data) {
        if (err) throw err;
        console.table("Hello, WELCOME TO BAMAZON", data)
        promptCustomer();
    }
    )


};


function promptCustomer() {
    connection.query("SELECT * from products", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: 'input',
                name: "choice",
                message: "What is the item id of the product you want to buy?"
            },
            {
                type: 'input',
                name: "quantity",
                message: "How many do you want to buy?"
            }
        ]).then(function (answer) {
            if (answer.quantity > choice.stock_quantity) {
                console.log("Your order exceeds our inventory")
            } else {
                (choice.stock_quantity > parseInt(answer.quantity))

                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: answer.quantity
                        },
                        {
                            item_id: chocie.id
                        }
                    ],
                    function (error) {
                        if (error) throw err;
                        console.log("Your total is: $" + answer.quantity * choice.price)
                        console.log("THANK YOU FOR SHOPPING WITH BAMAZON");
                        showProducts();
                    });
            }
        })
    })
}

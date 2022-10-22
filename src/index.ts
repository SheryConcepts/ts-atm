import inquirer from "inquirer";

function randomInt(min: number, max: number): number{
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "Please enter your username",
    },
    {
        type: "password",
        name: "pin",
        message: "Please enter your pin",
        mask: "*",
    },
    {
        type: "list",
        name: "mode",
        message: "You want to?",
        choices: ["Withdraw", "Deposit"],
    },
    {
        type: "list",
        name: "depost_amount",
        message: "Choose your desired amount",
        choices: [10, 100, 500, 1000, 5000, 10000],
        when: (answers) => {
            if (answers.mode === "Deposit") {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: "list",
        name: "withdraw_amount",
        message: "Choose your desired amount",
        choices: [10, 100, 500, 1000, 5000, 10000],
        when: (answers) => {
            if (answers.mode === "Withdraw") {
                return true
            } else {
                return false
            }
        }
    },
]).then(
    (ans) => {
        if (ans.mode === "Withdraw"){
            console.log(` Amount withdrawen: ${ans.withdraw_amount}\n Current Balance: ${randomInt(50000, 100000) - ans.withdraw_amount}`)
        } else if(ans.mode === "Deposit"){
            console.log(` Amount Deposited: ${ans.depost_amount}\n Current Balance: ${randomInt(50000, 100000) - ans.depost_amount}`)
        }
    }
);

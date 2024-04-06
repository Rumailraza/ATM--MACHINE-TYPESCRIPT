import inquirer from "inquirer";
let myBalance = 10000;

let mypin = 1314;

console.log("your current balance is : ", myBalance);
let pinAnswer: any = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter Pin Number",
  },
]);
if (pinAnswer.pin === mypin) {
  console.log("Correct Pin Code");

  let operationAns: any = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "select any One Method",
      choices: ["withdrawl", "check balance"],
    },
    
   
      
  ]);
  if (operationAns.operation === "withdrawl") {
    let amounts: any = await inquirer.prompt([
    //   {
    //     name: "amount",
    //     type: "number",
    //     message: "Enter Amount",
    //   },
    {
        name: "amount",
        type: "list",
        message: "select any One Option",
        choices: ["2000", "4000", "6000","8000","10000"],
      },
    ]);
   if (amounts.amount <= myBalance) {
    myBalance -= amounts.amount;
    console.log(`you remaning balance is : ${myBalance}`);
   } else {
     console.log("you amount is only :",myBalance)
   }
    
  } else if(operationAns.operation === "check balance"){
    console.log("your not withdrawl because your current balance is : ", myBalance);
  }
} else {
  console.log("Invalid Pin Code");
}

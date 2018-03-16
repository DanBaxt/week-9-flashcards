var inquirer = require('inquirer');

var BasicCard = require('./BasicCard.js');

var ClozeCard = require('./CLozeCard.js');


console.log("===================WELCOME TO FLASHCARD GENERATOR===================");

function startGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of cards do you want to use?",
            choices: ["Basic Card Game", "Cloze Card Game"],
            name: "userOption"
        }
    ]).then(function(data){
        var userChoice = data.userOption;

        if(userChoice === "Basic Card Game") {
            
    function QuestionNo1() {
            var question1 = new BasicCard("Who was the first president of the United States?", "George Washington");
            inquirer.prompt([
                {
                type: "input",
                message: question1.front,
                name: "firstQuestion"
                }
            ]).then(function(answer) {
                if (answer.firstQuestion == question1.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo2();
                } else {
                    console.log("");
                    console.log("Incorrect... The first president of the United States was George Washington!");
                    console.log("");
                    QuestionNo2();
                }
            });
        }
        QuestionNo1();
        function QuestionNo2() {
            var question2 = new BasicCard("Who was the sixteenth president of the United States?", "Abraham Lincoln");
            inquirer.prompt([
                {
                type: "input",
                message: question2.front,
                name: "secondQuestion"
                }
            ]).then(function(answer) {
                if (answer.secondQuestion == question2.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo3();
                } else {
                    console.log("");
                    console.log("Incorrect... The sixteenth president of the United States was Abraham Lincoln!");
                    console.log("");
                    QuestionNo3();
                }
            });
        }
        function QuestionNo3() {
            var question3 = new BasicCard("Who was the sixth president and son of the second president of the United States?", "John Quincy Adams");
            inquirer.prompt([
                {
                type: "input",
                message: question3.front,
                name: "thirdQuestion"
                }
            ]).then(function(answer) {
                if (answer.thirdQuestion == question3.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo4();
                } else {
                    console.log("");
                    console.log("Incorrect... The sixth president of the United States was John Quincy Adams, son of John Adams");
                    console.log("");
                    QuestionNo4();
                }
            });
        }
        function QuestionNo4() {
            var question4 = new BasicCard("Who was the twenty-sixth president of the United States?", "Theodore Roosevelt");
            inquirer.prompt([
                {
                type: "input",
                message: question4.front,
                name: "fourthQuestion"
                }
            ]).then(function(answer) {
                if (answer.fourthQuestion == question4.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo5();
                } else {
                    console.log("");
                    console.log("Incorrect... The twenty-sixth president of the United States was Theodore Roosevelt");
                    console.log("");
                    QuestionNo5();
                }
            });
        }
        function QuestionNo5() {
            var question5 = new BasicCard("Who was the son of the previous Answer?", "Franklin D. Roosevelt");
            inquirer.prompt([
                {
                type: "input",
                message: question5.front,
                name: "fifthQuestion"
                }
            ]).then(function(answer) {
                if (answer.fifthQuestion == question5.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    ending();
                } else {
                    console.log("");
                    console.log("Incorrect... The son of Theodore Roosevelt was Franklin D. Roosevelt");
                    console.log("");
                    ending();
                }
            });
        }
    }
    else {
    function QuestionNo6() {
        var question6 = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
        inquirer.prompt([
            {
            type: "input",
            message: question6.partial,
            name: "sixthQuestion"
            }
        ]).then(function(answer) {
            if (answer.sixthQuestion == question6.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo7();
            } else {
                console.log("");
                console.log("Incorrect... The first president of the United States was George Washington!");
                console.log("");
                QuestionNo7();
            }
        });
    }
    QuestionNo6();
    function QuestionNo7() {
        var question7 = new ClozeCard("Abraham Lincoln was the sixteenth president of the United States", "Abraham Lincoln");
        inquirer.prompt([
            {
            type: "input",
            message: question7.partial,
            name: "seventhQuestion"
            }
        ]).then(function(answer) {
            if (answer.seventhQuestion == question7.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo8();
            } else {
                console.log("");
                console.log("Incorrect... The sixteenth president of the United States was Abraham Lincoln!");
                console.log("");
                QuestionNo8();
            }
        });
    }
    function QuestionNo8() {
        var question8 = new ClozeCard("John Quincy Adams was the sixth president and son of the second president of the United States,", "John Quincy Adams");
        inquirer.prompt([
            {
            type: "input",
            message: question8.partial,
            name: "eigthQuestion"
            }
        ]).then(function(answer) {
            if (answer.eigthQuestion == question8.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
               QuestionNo9();
            } else {
                console.log("");
                console.log("Incorrect... The sixth president of the United States was John Quincy Adams, son of John Adams");
                console.log("");
             QuestionNo9();
            }
        });
    }
    function QuestionNo9() {
        var question9 = new ClozeCard("Theodore Roosevelt was the twenty-sixth president of the United States?", "Theodore Roosevelt");
        inquirer.prompt([
            {
            type: "input",
            message: question9.partial,
            name: "ninthQuestion"
            }
        ]).then(function(answer) {
            if (answer.ninthQuestion == question9.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo10();
            } else {
                console.log("");
                console.log("Incorrect... The twenty-sixth president of the United States was Theodore Roosevelt");
                console.log("");
                QuestionNo10();
            }
        });
    }
    function QuestionNo10() {
        var question10 = new ClozeCard("Franklin D. Roosevelt the son of the Theodore Roosevelt, and the thirty-second president", "Franklin D. Roosevelt");
        inquirer.prompt([
            {
            type: "input",
            message: question10.partial,
            name: "tenthQuestion"
            }
        ]).then(function(answer) {
            if (answer.tenthQuestion == question10.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
               ending();
            } else {
                console.log("");
                console.log("Incorrect... The son of Theodore Roosevelt was Franklin D. Roosevelt");
                console.log("");
        ending();
            }
        });
    }
}
function ending() {
    console.log("============================================");
    console.log("You're' finished! Review your answers and try again!")
}
    })
}
startGame();
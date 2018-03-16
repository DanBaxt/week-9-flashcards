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
                    QuestionNo11();
                } else {
                    console.log("");
                    console.log("Incorrect... The son of Theodore Roosevelt was Franklin D. Roosevelt");
                    console.log("");
                    QuestionNo11();
                }
            });
        }
        function QuestionNo11() {
            var question11 = new BasicCard("Who was the thiry-ninth president of the United States?", "Jimmy Carter");
            inquirer.prompt([
                {
                type: "input",
                message: question11.front,
                name: "eleventhQuestion"
                }
            ]).then(function(answer) {
                if (answer.eleventhQuestion == question11.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo12();
                } else {
                    console.log("");
                    console.log("Incorrect... The thirty-ninth president of the United States was Jimmy Carter");
                    console.log("");
                    QuestionNo12();
                }
            });
        }
        function QuestionNo12() {
            var question12 = new BasicCard("Who was the thiry-third president of the United States?", "Harry Truman");
            inquirer.prompt([
                {
                type: "input",
                message: question12.front,
                name: "twelfthQuestion"
                }
            ]).then(function(answer) {
                if (answer.twelfthQuestion == question12.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo13();
                } else {
                    console.log("");
                    console.log("Incorrect... The thirty-third president of the United States was Harry Truman");
                    console.log("");
                    QuestionNo13();
                }
            });
        }
        function QuestionNo13() {
            var question13 = new BasicCard("Who was the twenty-fourth president of the United States?", "Grover Cleveland");
            inquirer.prompt([
                {
                type: "input",
                message: question13.front,
                name: "thirteenthQuestion"
                }
            ]).then(function(answer) {
                if (answer.thirteenthQuestion == question13.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo14();
                } else {
                    console.log("");
                    console.log("Incorrect... The twenty-fourth president of the United States was Grover Cleveland");
                    console.log("");
                    QuestionNo14();
                }
            });
        }
        function QuestionNo14() {
            var question14 = new BasicCard("Who was the twenty-first president of the United States?", "Chester Arthur");
            inquirer.prompt([
                {
                type: "input",
                message: question14.front,
                name: "fourteenthQuestion"
                }
            ]).then(function(answer) {
                if (answer.fourteenthQuestion == question14.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    QuestionNo15();
                } else {
                    console.log("");
                    console.log("Incorrect... The twenty-first president of the United States was Chester Arthur");
                    console.log("");
                    QuestionNo15();
                }
            });
        }
        function QuestionNo15() {
            var question15 = new BasicCard("Who was the twenty-second president of the United States?", "Grover Cleveland");
            inquirer.prompt([
                {
                type: "input",
                message: question15.front,
                name: "fifteenthQuestion"
                }
            ]).then(function(answer) {
                if (answer.fifteenthQuestion == question15.back) {
                    console.log("");
                    console.log("You are correct!");
                    console.log("");
                    ending();
                } else {
                    console.log("");
                    console.log("Incorrect... The twenty-first president of the United States was Grover Cleveland");
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
               QuestionNo16();
            } else {
                console.log("");
                console.log("Incorrect... The son of Theodore Roosevelt was Franklin D. Roosevelt");
                console.log("");
        QuestionNo16();
            }
        });
    }
    function QuestionNo16() {
        var question16 = new ClozeCard("Jimmy Carter was the thiry-ninth president of the United States", "Jimmy Carter");
        inquirer.prompt([
            {
            type: "input",
            message: question16.partial,
            name: "sixteenthQuestion"
            }
        ]).then(function(answer) {
            if (answer.sixteenthQuestion == question16.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo17();
            } else {
                console.log("");
                console.log("Incorrect... The thirty-ninth president of the United States was Jimmy Carter");
                console.log("");
                QuestionNo17();
            }
        });
    }
    function QuestionNo17() {
        var question17 = new ClozeCard("Harry Truman was the thiry-third president of the United States", "Harry Truman");
        inquirer.prompt([
            {
            type: "input",
            message: question17.partial,
            name: "seventeenthQuestion"
            }
        ]).then(function(answer) {
            if (answer.seventeenthQuestion == question17.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo18();
            } else {
                console.log("");
                console.log("Incorrect... The thirty-third president of the United States was Harry Truman");
                console.log("");
                QuestionNo18();
            }
        });
    }
    function QuestionNo18() {
        var question18 = new ClozeCard("Grover Cleveland was the twenty-fourth president of the United States", "Grover Cleveland");
        inquirer.prompt([
            {
            type: "input",
            message: question18.partial,
            name: "eighteenthQuestion"
            }
        ]).then(function(answer) {
            if (answer.eighteenthQuestion == question18.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo19();
            } else {
                console.log("");
                console.log("Incorrect... The twenty-fourth president of the United States was Grover Cleveland");
                console.log("");
                QuestionNo19();
            }
        });
    }
    function QuestionNo19() {
        var question19 = new ClozeCard("Chester Arthur was the twenty-first president of the United States", "Chester Arthur");
        inquirer.prompt([
            {
            type: "input",
            message: question19.partial,
            name: "nineteenthQuestion"
            }
        ]).then(function(answer) {
            if (answer.nineteenthQuestion == question19.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                QuestionNo20();
            } else {
                console.log("");
                console.log("Incorrect... The twenty-first president of the United States was Chester Arthur");
                console.log("");
                QuestionNo20();
            }
        });
    }
    function QuestionNo20() {
        var question20 = new ClozeCard("Grover Cleveland was the twenty-second president of the United States", "Grover Cleveland");
        inquirer.prompt([
            {
            type: "input",
            message: question20.partial,
            name: "twentithQuestion"
            }
        ]).then(function(answer) {
            if (answer.twentithQuestion == question20.cloze) {
                console.log("");
                console.log("You are correct!");
                console.log("");
                ending();
            } else {
                console.log("");
                console.log("Incorrect... The twenty-first president of the United States was Chester Arthur");
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
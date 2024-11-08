let menu = document.querySelector(".Menu")
let start = menu.querySelector(".StartButton")
let create = menu.querySelector(".CreateButton")
let game = document.querySelector(".Game")
let question = game.querySelector(".QuestionField")
let answers = game.querySelector(".Answers")
let multAnswersProceed = game.querySelector(".MultipleAnswerProceed")
let time = game.querySelector(".TimePassed")
let results = document.querySelector(".GameResults")
let resultsfield = results.querySelector(".ResultsField")

let placeholder = {
    "name":"hi",
    "contents":[
        {
            "question":"question 1",
            "type":"quiz",
            "answers":["hi","hello","none"],
            "correctanswers":["none"],
            "multiple":false
        },
        {
            "question":"question 2: electric boogaloo",
            "type":"quiz",
            "answers":["this answer is correct","this answer is also correct","this answer is incorrect"],
            "correctanswers":["this answer is correct","this answer is also correct"],
            "multiple":false
        },
        {
            "question":"select them all",
            "type":"quiz",
            "answers":["left","right"],
            "correctanswers":["left","right"],
            "multiple":true
        },
        {
            "question":"mayo is an instrument",
            "type":"condition",
            "correctanswer":false
        }
    ]
}
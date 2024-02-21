let quiz_answers = document.getElementById("quiz-answers")
let quiz = [
    {
        questions: 'What do you believe to be true about the world?',
        options: ['Equality', 'Nothing', "Don't Know", 'Ask Again'],
        answers:"Nothing"
    },
    {
        questions: 'What is the longest river in the world',
        options: ['Nile', 'Amazon', "Mekong", 'Congo'],
        answers:"Amazon"
    },
    {
        questions: 'What is your favourite color',
        options: ['Blue', 'Red', "white", 'Orange'],
        answers:"Red"
    },
    {
        questions: 'What is your favourite food',
        options: ['Amala', 'Rice', "Beans", 'None'],
        answers:"None"
    },
    {
        questions: 'Who do you consider as a genius?',
        options: ['Newton', 'Faraday', "Sage", 'Me'],
        answers:"Sage"
    } 
]
let begin = 0
let questionscount = document.getElementById('questionscount')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let questionsArea = document.getElementById('questionsarea')
let score = 0
let userans = []
let isthere = []
function quest_score_display() {
    questionsArea.innerHTML =  `${begin + 1}. ${quiz[begin].questions}`
    questionscount.innerHTML = `${begin + 1} of ${quiz.length} Questions`
    quiz_answers.innerHTML = ""
    quiz[begin].options.forEach((el)=>{
        quiz_answers.innerHTML += `
            <input onclick="useranswer(event)" value="${el}" name="ddd${begin}" type="radio" />
            <span>${el}</span>
        `
    })
    // btn1.innerHTML = `${quiz[begin].options[0]}`
    // btn2.innerHTML = `${quiz[begin].options[1]}`
    // btn3.innerHTML = `${quiz[begin].options[2]}`
    // btn4.innerHTML = `${quiz[begin].options[3]}`
}
quest_score_display()

function useranswer(ev) {
    let ans = ev.target.value;
    console.log(ans);
    userans[begin] = ans;
    console.log(userans);
    // userans.push(answer)
    // for (let index = 0; index < userans.length; index++) {
    //     if (userans[index] == quiz[begin].answers) {
    //         isthere.push(userans[index])
    //         if (!isthere[index]) {
    //             alert('more than one')
    //         }else{
    //             console.log(isthere);
    //         }
    //     }
    // }
}

function submitest() {
    userans.forEach((el, i)=>{
        if(el == quiz[i].answers){
            score++
        }
    })
    alert(`Your score is ${score} of ${quiz.length}`)
}
function Next() {
    if (begin == quiz.length -1) {
        begin = -1
    }
    ++begin 
    quest_score_display()
}
function Prev() {
    if(begin <= 0) {
        begin = quiz.length
    }
    begin--
    quest_score_display()
}


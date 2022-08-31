const quizData = [{
        question: 'Who is the president of Kenya?',
        a: 'Moi',
        b: 'Odinga',
        c: 'Kanye',
        d: 'Ruto',

        answer: 'd',
    },
    {
        question: 'What color is milk?',
        a: 'red',
        b: 'green',
        c: 'white',
        d: 'colorless',
        answer: 'c',
    },
    {
        question: 'Which is not even number?',
        a: '1',
        b: '224',
        c: '1738',
        d: '16',
        answer: 'a',
    },
    {
        question: 'Where was Jesus born?',
        a: 'Jerusalem',
        b: 'Bethlehem',
        c: 'Jericho',
        d: 'Canada',
        answer: 'b',
    },
]


const questionEl = document.getElementById('question')
const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')
const showScore = document.getElementById('score')


const answersEl = document.querySelectorAll(".answer")


let currentQuestion = 0
loadQuestion()
let score = 0




function loadQuestion() {

    deselectChoices()

    const currentQuiz = quizData[currentQuestion]
    questionEl.innerText = currentQuiz.question
    aText.innerText = currentQuiz.a
    bText.innerText = currentQuiz.b
    cText.innerText = currentQuiz.c
    dText.innerText = currentQuiz.d


}

function getSelectedAnswer() {


    let answer = undefined
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectChoices() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelectedAnswer()
    const currentQuiz = quizData[currentQuestion]

    if (answer) {
        if (answer === currentQuiz.answer) {
            score++
            console.log(score);
        } else {
            console.log(score);
            console.log(answer);
            console.log(currentQuiz.answer);
        }
        currentQuestion++



        if (currentQuestion !== quizData.length) {
            loadQuestion()
        } else {
            let remarks = ''
            score === 4 ? remarks = 'Excellent Score' :
                score === 3 ? remarks = 'Good' : score === 2 ? remarks = 'Average' :
                remarks = 'Try Harder'
            showScore.innerHTML = `<h4>Your Score! 🤩😎</h4><h2>${score}/${quizData.length}</h2><p>${remarks}</p><button onclick= "location.reload()">Play Again</button>`
            showScore.classList.add('show-result')

        }
    }

})

function checkCorrectAns(selected) {
    const currentQuiz = quizData[currentQuestion]
    console.log(selected);
    console.log(currentQuiz.answer);
    if (selected === currentQuiz.answer) {

        console.log("Correct");

    } else {
        console.log("Wrong");
    }

}
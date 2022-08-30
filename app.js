const quizData = [{
        question: 'Who is the president of Kenya?',
        a: 'Moi',
        b: 'Odinga',
        c: 'Kanye',
        d: 'Ruto',

        answer: 'b',
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


let currentQuestion = 0
loadQuestion()

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion]
    questionEl.innerText = currentQuiz.question
    aText.innerText = currentQuiz.a
    bText.innerText = currentQuiz.b
    cText.innerText = currentQuiz.c
    dText.innerText = currentQuiz.d
    currentQuestion++

}
submitBtn.addEventListener("click", () => {
    if (currentQuestion !== quizData.length) {
        loadQuestion()
    } else {
        currentQuestion = 0
    }

})
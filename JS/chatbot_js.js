let questions = [
    {
        question: "Te-ai apucat de ideea de proiect?",
        options: {
            a: "Da, am deja o schiță!",
            b: "Nu încă, dar mă gândesc la ceva",
            c: "Nu prea știu ce să fac..."
        },
        correctAnswer: "a",
        correctResponse: "Excelent! Abia aștept să văd ce iese!",
        incorrectResponse: "Nu-i nimic! Discutăm idei împreună"
    },
    {
        question: "Cum merge echipa ta la proiect?",
        options: {
            a: "Ne organizăm bine!",
            b: "Mai greu cu sincronizarea...",
            c: "Sunt singur"
        },
        correctAnswer: "a",
        correctResponse: "Foarte tare! Munca în echipă e cheia succesului!",
        incorrectResponse: "O să găsim soluții împreună, nu-ți face griji"
    },
    {
        question: "Cât de avansat ești cu partea de CSS?",
        options: {
            a: "Aproape gata, arată super!",
            b: "Sunt la jumătate",
            c: "Încă mă lupt cu alinierea..."
        },
        correctAnswer: "a",
        correctResponse: "Super! Designul este foarte important!",
        incorrectResponse: "Nu-ți face griji, CSS-ul cere puțină răbdare!"
    },
    {
        question: "Ai întâmpinat erori în consolă la JavaScript?",
        options: {
            a: "Nu, totul merge perfect!",
            b: "Da, dar le-am rezolvat pe parcurs",
            c: "Am câteva erori pe care nu le înțeleg"
        },
        correctAnswer: "a",
        correctResponse: "Bravo! Un cod curat e cel mai bun!",
        incorrectResponse: "Debug-ul face parte din proces, le rezolvăm!"
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options)
        .map(key => `${key}. ${currentQuestion.options[key]}`)
        .join(" | ");

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;

    chatContainer.appendChild(botResponse);
    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase().trim();
    if (userResponse === "") return;

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> `;

    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }

    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";

    setTimeout(() => {
        displayQuestion();
        scrollChatContainerToBottom();
    }, 800);
});
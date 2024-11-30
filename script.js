let timeLeft = 2400; // 40 minutes in seconds
let timer; // To store the timer reference

const form = document.getElementById("quizForm");
const startQuizButton = document.getElementById("startQuizButton");
const timerElement = document.getElementById("timer");
const questionsDiv = document.getElementById("questions");
const resultDiv = document.getElementById("result");
const scoreElement = document.getElementById("score");
const remarkElement = document.getElementById("remark");
const submitQuizButton = document.getElementById("submitQuizButton");

// Updated quiz data to store answers as index
const quizData = [
  {
    question: "Which of the following is the correct extension for Python files?",
    options: [".py", ".java", ".cpp", ".txt"],
    answer: 0,
  },
  {
    question: "Which of the following keywords is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: 2,
  },
  {
    question: "Which of the following is not a valid Python variable name?",
    options: ["my_var", "_myvar", "2myvar", "myVar"],
    answer: 2,
  },
  {
    question: "What is the output of the following code?\n\nprint(2 * 3 ** 2)",
    options: ["36", "18", "12", "8"],
    answer: 1,
  },
  {
    question: "Which of the following functions is used to get input from the user in Python?",
    options: ["scanf()", "input()", "gets()", "read()"],
    answer: 1,
  },
      {
        question: "What will be the output of the following code?\n\nx = 5\ny = 10\nprint(x + y)",
        options: ["15", "5", "10", "Error"],
        answer: 0,
      },
      {
        question: "Which of the following data types is immutable in Python?",
        options: ["List", "Dictionary", "String", "Set"],
        answer: 2,
      },
      {
        question: "What is the correct syntax to create a list in Python?",
        options: ["list = [1, 2, 3]", "list = (1, 2, 3)", "list = {1, 2, 3}", "list = <1, 2, 3>"],
        answer: 0,
      },
      {
        question: "What does the 'len()' function do in Python?",
        options: [
          "Returns the length of a string, list, or tuple",
          "Converts a value to a string",
          "Prints output to the screen",
          "Terminates the program"
        ],
        answer: 0,
      },
      {
        question: "Which of the following statements will throw an error in Python?",
        options: [
          'print("Hello World")',
          "print('Hello World')",
          'print("Hello", "World")',
          'print("Hello" \'World)'
        ],
        answer: 3,
      },
      {
        question: "What is the result of the following expression?\n\n10 % 3",
        options: ["1", "3", "10", "0"],
        answer: 0,
      },
      {
        question: "Which of the following is used to start a block of code in Python?",
        options: ["{ }", ";", "Indentation", "( )"],
        answer: 2,
      },
      {
        question: "Which of the following is a valid string in Python?",
        options: ["'Hello'", '"Hello"', "'''Hello'''", "All of the above"],
        answer: 3,
      },
      {
        question: "What is the output of the following Python code?\n\nx = [1, 2, 3, 4]\ny = x\ny.append(5)\nprint(x)",
        options: ["[1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "Error","None"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is not a valid operator in Python?",
        options: ["+", "**", "//", "?"],
        answer: 3,
      },
      {
        question: "What does AI stand for?",
        options: ["Artificial Interface", "Artificial Intelligence", "Automated Information", "Advanced Intelligence"],
        answer: 1,
      },
      {
        question: "Which of the following is NOT an example of AI?",
        options: [
          "Virtual Assistant (e.g., Alexa)",
          "Automatic Street Lights",
          "Word Processor",
          "Self-driving Cars"
        ],
        answer: 2,
      },
      {
        question: "Which field is closely associated with AI?",
        options: ["Astronomy", "Data Science", "Civil Engineering", "Architecture"],
        answer: 1,
      },
      {
        question: "AI can be used in which of the following applications?",
        options: [
          "Predicting weather",
          "Diagnosing diseases",
          "Facial recognition",
          "All of the above"
        ],
        answer: 3,
      },
      {
        question: "What is the main goal of AI?",
        options: ["Replace humans", "Mimic human intelligence", "Increase hardware speed", "Create robots"],
        answer: 1,
      },
      {
        question: "Which of the following is the first step in the AI project cycle?",
        options: ["Problem Scoping", "Data Acquisition", "Model Training", "Evaluation"],
        answer: 0,
      },
      {
        question: "What is the purpose of 'Data Acquisition' in the AI Project Cycle?",
        options: ["Analyzing data", "Collecting relevant data", "Visualizing data", "Creating a solution"],
        answer: 1,
      },
      {
        question: "Which step involves assessing the performance of an AI model?",
        options: ["Problem Scoping", "Data Processing", "Evaluation", "Model Deployment"],
        answer: 2,
      },
      {
        question: "What is the final step in the AI Project Cycle?",
        options: ["Model Training", "Data Cleaning", "Problem Scoping", "Deployment"],
        answer: 3,
      },
      {
        question: "In the AI Project Cycle, what is 'Model Training'?",
        options: [
          "Cleaning the dataset",
          "Building and training an AI model using data",
          "Deploying the solution",
          "Evaluating project feasibility"
        ],
        answer: 1,
      },
      {
        question: "What is a neural network inspired by?",
        options: [
          "The solar system",
          "The human brain",
          "Computer circuits",
          "Mathematical formulas"
        ],
        answer: 1,
      },
      {
        question: "In a neural network, what is a 'node' also known as?",
        options: ["Cell", "Neuron", "Layer", "Synapse"],
        answer: 1,
      },
      {
        question: "What connects the nodes in a neural network?",
        options: ["Wires", "Layers", "Weights", "Data points"],
        answer: 2,
      },
      {
        question: "Which of the following is an application of neural networks?",
        options: [
          "Image recognition",
          "Document formatting",
          "Spreadsheet calculations",
          "Mechanical drawing"
        ],
        answer: 0,
      },
      {
        question: "What does a neural network need to function effectively?",
        options: [
          "Large amounts of labeled data",
          "High-speed internet",
          "Expensive hardware",
          "Human intervention at every step"
        ],
        answer: 0,
      },
    {
              question: "What will be the output of the following code?\n\na = 10\nb = 5\nprint(a // b)",
              options: [
                  "2.0",
                  "2",
                  "2.5",
                  "Error"
              ],
              correctAnswer: 1
          },
          {
              question: "Which of the following is the correct way to import only the `sqrt` function from the `math` module?",
              options: [
                  "import math.sqrt",
                  "from math import sqrt",
                  "import sqrt from math",
                  "from math import *"
              ],
              correctAnswer: 1
          },
          {
              question: "What is the output of the following code?\n\ndef multiply(a, b=5):\n return a * b\n\nprint(multiply(3))",
              options: [
                  "8",
                  "15",
                  "Error",
                  "None"
              ],
              correctAnswer: 1
          },
          {
              question: "What will `len([10, [20, 30], 40])` return?",
              options: [
                  "2",
                  "3",
                  "4",
                  "Error"
              ],
              correctAnswer: 1
          },
          {
              question: "What will be the output of this code?\n\nfor i in range(1, 5):\n print(i, end=' ')",
              options: [
                  "1 2 3 4",
                  "1 2 3 4 5",
                  "0 1 2 3 4",
                  "Error"
              ],
              correctAnswer: 0
          },
          {
              question: "What does the `open(\"file.txt\", \"r\")` function do?",
              options: [
                  "Opens the file in write mode.",
                  "Opens the file in append mode.",
                  "Opens the file in read mode.",
                  "Creates a new file named `file.txt`."
              ],
              correctAnswer: 2
          },
          {
              question: "What is the output of the following code?\n\nx = [1, 2, 3]\ny = x.copy()\ny[0] = 5\nprint(x)",
              options: [
                  "[1, 2, 3]",
                  "[5, 2, 3]",
                  "[1, 5, 3]",
                  "Error"
              ],
              correctAnswer: 0
          },
          {
              question: "Which of the following statements about Python lists is true?",
              options: [
                  "Lists are immutable.",
                  "Lists can contain elements of different data types.",
                  "Elements in a list cannot be modified after creation.",
                  "Lists cannot contain other lists."
              ],
              correctAnswer: 1
          },
          {
              question: "What is the output of this code?\n\nnum = 7\nif num % 2 == 0:\n print(\"Even\")\nelse:\n print(\"Odd\")",
              options: [
                  "Even",
                  "Odd",
                  "7",
                  "Error"
              ],
              correctAnswer: 1
          },
          {
              question: "What is the purpose of the `break` statement in Python?",
              options: [
                  "Skip to the next iteration of the loop.",
                  "Exit the loop immediately.",
                  "End the program.",
                  "Pause the loop temporarily."
              ],
              correctAnswer: 1
          }
];

// Generate quiz questions dynamically
quizData.forEach((data, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `
    <p><strong>Q${index + 1}: ${data.question}</strong></p>
    ${data.options
      .map(
        (option, i) =>
          `<label><input type="radio" name="q${index}" value="${i}" required> ${option}</label><br>`
      )
      .join("")}
  `;
  questionsDiv.appendChild(questionDiv);
});

// Timer function
function startTimer() {
    timerElement.classList.remove("hidden");
    timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up! Submitting your answers.");
  
  
        // Automatically submit the quiz when the timer runs out
        form.querySelectorAll('input[type="radio"]:checked').forEach(input => {
          input.setAttribute('checked', 'checked'); // Ensure radio inputs retain their values after submission
        });
  
  
        // Trigger form submission programmatically
        form.dispatchEvent(new Event("submit"));
      } else {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        timeLeft--;
      }
    }, 1000);
  }

// Start Quiz Button Handler
startQuizButton.addEventListener("click", () => {
  const name = form.name.value.trim();
  const school = form.school.value.trim();
  const roll = form.roll.value.trim();

  if (name === "" || school === "" || roll === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // Hide student info section, show quiz and timer
  document.querySelector(".info").classList.add("hidden");
  questionsDiv.classList.remove("hidden");
  submitQuizButton.classList.remove("hidden");

  // Start the timer
  startTimer();
});

// Save answers to a text file
function saveToFile(content, fileName) {
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting
  clearInterval(timer); // Stop the timer

  let score = 0;
  let studentAnswers = `Student Name: ${form.name.value}\nSchool/Institute: ${form.school.value}\nRoll Number: ${form.roll.value}\n\nSelected Answers:\n`;

  let attemptedAnswers = "";
  let correctAnswers = "";
  let answerReview = ""; // To store the answers for displaying

  // Loop through each question and evaluate
  quizData.forEach((data, index) => {
    const selected = form[`q${index}`].value; // User's selected option index
    const selectedText = selected !== undefined ? data.options[selected] : "No Answer";
    const correctText = data.options[data.answer];

    attemptedAnswers += `Q${index + 1}: You selected: ${selectedText}\n`;
    correctAnswers += `Correct Answer: ${correctText}\n`;

    // Add the review of answers
    answerReview += `
      <p>
        <strong>Q${index + 1}: ${data.question}</strong><br>
        Your Answer: <span style="color: ${parseInt(selected) === data.answer ? "green" : "red"}">${selectedText}</span><br>
        Correct Answer: <span style="color: green">${correctText}</span>
      </p>
    `;

    // Increment score if the answer is correct
    if (parseInt(selected) === data.answer) {
      score++;
    }
  });

  const totalQuestions = quizData.length;
  const percentage = (score / totalQuestions) * 100;

  // Display the result on the webpage
  form.style.display = "none";
  resultDiv.classList.remove("hidden");

  // Display student details in result
  resultDiv.innerHTML = `
    <h3>Student Information:</h3>
    <p><strong>Name:</strong> ${form.name.value}</p>
    <p><strong>School:</strong> ${form.school.value}</p>
    <p><strong>Roll Number:</strong> ${form.roll.value}</p>
    <h3>Quiz Results:</h3>
    <p><strong>Score:</strong> ${score} out of ${totalQuestions} (${percentage.toFixed(2)}%)</p>
    <p id="remark"></p>
    <h3>Answer Review:</h3>
    ${answerReview}
  `;

  // Add a remark based on percentage
  const remarkElement = document.getElementById("remark");
  if (percentage < 40) {
    remarkElement.textContent = "You failed. Better luck next time!";
    remarkElement.style.color = "red";
  } else {
    remarkElement.textContent = "Congratulations! You passed.";
    remarkElement.style.color = "#5cb85c";
  }

  // Prepare content for the file
  studentAnswers += `\n\nScore: ${score} / ${totalQuestions}\nPercentage: ${percentage.toFixed(2)}%\n\n`;
  studentAnswers += percentage < 40 ? "Result: Fail\n" : "Result: Pass\n";

  // Append attempted answers and correct answers
  studentAnswers += `\nAttempted Answers:\n${attemptedAnswers}\nCorrect Answers:\n${correctAnswers}`;

  // Save the data to a text file
  saveToFile(studentAnswers, "Quiz_Answers.txt");
});
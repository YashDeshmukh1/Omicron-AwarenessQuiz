 const quizData = [  
  {  
   question: "The most common symptoms of omicron are?",  
   a: "Fever",  
   b: "Dry Cough",  
   c: "Fatigue",  
   d: "All of the above",  
   correct: "d",  
  },  
  {  
   question: "How to prevent omicron?",  
   a: "By socializing with more people",  
   b: "By Wearing mask and keeping distance",  
   c: "Frequently washing hands ",  
   d: "Both B and C",  
   correct: "d",  
  },  
  {  
   question: "What minimum distance should you maintain in public?",  
   a: "2 meters-minimum, further away is best",  
   b: "None we can shake hands if they are washed first",  
   c: "3 meters",  
   d: "1 meters",  
   correct: "a",  
  },  
  {  
   question: "People which are vaccineted are immune to omicron.",  
   a: "True",  
   b: "Only if they have taken the booster dose",  
   c: "False",  
   d: "No Vaccination is Needed",  
   correct: "b",  
  },  
 ];  
 const quiz = document.getElementById("quiz");  
 const answerElements = document.querySelectorAll(".answer");  
 const questionElement = document.getElementById("question");  
 const a_text = document.getElementById("a_text");  
 const b_text = document.getElementById("b_text");  
 const c_text = document.getElementById("c_text");  
 const d_text = document.getElementById("d_text");  
 const submitButton = document.getElementById("submit");  
 let currentQuiz = 0;  
 let score = 0;  
 const deselectAnswers = () => {  
  answerElements.forEach((answer) => (answer.checked = false));  
 };  
 const getSelected = () => {  
  let answer;  
  answerElements.forEach((answerElement) => {  
   if (answerElement.checked) answer = answerElement.id;  
  });  
  return answer;  
 };  
 const loadQuiz = () => {  
  deselectAnswers();  
  const currentQuizData = quizData[currentQuiz];  
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  d_text.innerText = currentQuizData.d;  
 };  
 loadQuiz();  
 submitButton.addEventListener("click", () => {  
  const answer = getSelected();  
  if (answer) {  
   if (answer === quizData[currentQuiz].correct) score++;  
   currentQuiz++;  
   if (currentQuiz < quizData.length) loadQuiz();  
   else {  
    quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     ` // location.reload() won't work in CodePen for security reasons;  
   }  
  }  
 });  
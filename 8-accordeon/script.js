console.log("cc");

const questions = document.querySelectorAll('.question');

console.log(questions);

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function onClick() {
    console.log(questions[i]);
    questions[i].nextElementSibling.classList.toggle("visible")
    questions[i].lastElementChild.classList.toggle("fa-chevron-up")
    });
}



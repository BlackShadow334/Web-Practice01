const question = document.querySelector("#question")
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");


let current_question = 0;

const loadQuiz = () => {
    const current_quiz_data = quiz_data[current_question];
    
    question.innerHTML = current_quiz_data.question;
    
    let random_index = RandomizeArray([0,1,2,3]);
    
    a_text.innerHTML = current_quiz_data.options[random_index[0]];
    b_text.innerHTML = current_quiz_data.options[random_index[1]];
    c_text.innerHTML = current_quiz_data.options[random_index[2]];
    d_text.innerHTML = current_quiz_data.options[random_index[3]];
    
    current_question ++ ;
}
loadQuiz();
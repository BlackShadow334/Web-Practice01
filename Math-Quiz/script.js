const question = document.querySelector("#question")
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

let total_score = undefined ;

// quiz_indexes keeps index from 0-quiz_data.length  and than it is randomized and saved as random_quiz_indexes then this randomized indexes used for calling question instead of normal sequence of index, so that question type can also be randamized. 
const quiz_indexes = [];
for(let i = 0; i < quiz_data.length; i++){
    quiz_indexes[i] = i;
}
const random_quiz_indexes = RandomizeArray(quiz_indexes);



let current_random_quiz_index = 0;
let question_no = 1;

const loadQuiz = () => {
    const current_quiz_data = quiz_data[random_quiz_indexes[current_random_quiz_index]];
    
    question.innerHTML = current_quiz_data.question;
    
    // random_index keeps randamized index from 0-3 so that options from quiz_data's question can not be found in same order because in quiz_data's quention options[0] is always correct, so list of random_index from 0-3 is created and put the correct option[0] at random position among a, b, c, d text and wrong options also. 
    let random_index = RandomizeArray([0,1,2,3]);
    
    a_text.innerHTML = current_quiz_data.options[random_index[0]];
    b_text.innerHTML = current_quiz_data.options[random_index[1]];
    c_text.innerHTML = current_quiz_data.options[random_index[2]];
    d_text.innerHTML = current_quiz_data.options[random_index[3]];
    
    document.querySelector("#question-no").innerHTML = question_no + ". ";
    
    question_no++;
    current_random_quiz_index ++ ;
}


const nextQuestion = () => {
    
    
    loadQuiz();
}


loadQuiz();
document.querySelector("#next").addEventListener("click", nextQuestion);
document.querySelector("#skip").addEventListener("click", nextQuestion);

// num is list of all numbers used later in questions ie in quiz_data
// and random_num adds random no from 0-10 in given index of nums list
var nums = [];
const random_num = (nums_index) => {
    nums[nums_index] = Math.floor(Math.random()*10);
}


const quiz_data = [
    {
        question: "", 
        correct: 1,
        options: {
            0: "",
            1: "",
            3: "",
            4: ""
        }
    },
    ]
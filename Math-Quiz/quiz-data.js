// n is list of all numbers used later in questions ie in quiz_data
// and n adds random no from 0-10 in given index of nums list
var nums = [];
const n = (nums_index) => {
    if (nums[nums_index] == undefined){
        nums[nums_index] = Math.floor(Math.random()*10);
    } 
    return nums[nums_index];
}
//console.log(n(0));
//console.log(n(1)) ;


const quiz_data = [
    {
        question: n(0) + " + " + n(1) + " * [" + n(2) + " - " + n(3) + "] ", 
        answer: n(0) + n(1) * [n(2) - n(3)],
        options: {
            0: n(0) + n(1) * [n(2) - n(3)],
            1: n(0) + n(2) * (n(2) - n(1)),
            2: n(0) + n(1) * (n(1) - n(3)),
            3: n(1) + n(1) * (n(2) - n(2))
            /*
            0: "a",
            1: "b",
            2: "c",
            3: "d" */
        }
    },
    {
        question: "(" + n(4) + " + " + n(5) + " + " + n(6) + ") ** 2", 
        answer: (n(4) + n(5) + n(6)) ** 2,
        options: {
            0: (n(4) + n(5) + n(6)) ** 2,
            1: (n(1) + n(5) + n(6)),
            2: (n(4) + n(2) + n(6))*2,
            3: (n(3) + n(5) + n(6))**3 
        }
    },
    {
        question: "(" + n(7) + " + " + n(8) + ") ** 3 + " + n(9), 
        answer: (n(7) + n(8)) ** 3 + n(9),
        options: {
            0: (n(7) + n(8)) ** 3 + n(9),
            1: (n(6) + n(5)) ** 3 + n(4),
            2: (n(5) + n(8)) ** 3 + n(9),
            3: (n(9) + n(9)) ** 3 + n(9)
        }
    },
    {
        question: "(" + n(10) + " - " + n(11) + ") * (" + n(12) + " - " + n(13) + ")",
        answer: (n(10) - n(11)) * (n(12) - n(13)),
        options: {
            0: (n(10) - n(11)) * (n(12) - n(13)),
            1: (n(10) - n(10)) * (n(7) - n(13)),
            2: (n(9) - n(6)) * (n(12) - n(13)),
            3: (n(10) - n(11)) * (n(9) - n(3))
        }
    },
    {
        question: "(" + n(14) + " + " + n(15) + " + " + n(16) + ") * " + n(17), 
        answer: (n(14) + n(15) + n(16)) * n(17),
        options: {
            0: (n(14) + n(15) + n(16)) * n(17),
            1: (n(13) + n(14) + n(15)) * n(17),
            2: (n(12) + n(13) + n(16)) * n(7),
            3: (n(1) + n(5) + n(17)) * n(12)
        }
    },
    ] 
    
    
/**
 * @ fisher yates method ,
 * this method randamizes the index of given array,
 * @param {Array} array any array that has to be randamized.
 */
const a = ["a", "b", "c", "d", "e"];
const RandomizeArray = (array) => {
    
    let arr = array;
    let i = array.length;
    let j, temp;
    
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

//document.querySelector("#testing_area").innerHTML = RandomizeArray(a);
//document.getElementById("test").innerHTML = "tgggh";
//RandomizeArray(a);
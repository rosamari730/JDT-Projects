let input = document.getElementById("input");
const test = () => {
    console.log("hello world");
}
let count =0 
input.innerHTML = count
const plus1 = () => {
    count +=1 
    input.innerHTML = count
}
const minus1 = () => {
    count -=1 
    input.innerHTML = count} 

const reset = () => {
    count =0
    input.innerHTML = count 
} 